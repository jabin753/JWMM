'use strict'

const rp = require('request-promise')
const debug = require('debug')('jwmm:scrapper')
const cheerio = require('cheerio')
const { getUrl, parseAssign } = require('./utils')
const chalk = require('chalk')

module.exports = async function wol (configs = {
  lang: 'en',
  date: Date.now()
}) {
  debug(`${chalk.blue('Scrapper initializing...')}`)

  let url
  try {
    url = getUrl(configs)
  } catch (e) {
    debug(`${chalk.red(e)}`)

    return {}
  }
  debug(`${chalk.blue(`request to ${url}`)}`)

  let html, $
  try {
    html = await rp(url)
    $ = cheerio.load(html)
  } catch (e) {
    debug(`${chalk.red(e)}`)
    return {}
  }
  debug(`${chalk.green(`received from ${url}`)}`)

  const meeting = { assigns: [] }
  let assignCounter = 1
  // ACTUAL WEEK
  meeting.week = $('#p1').text().trim()
  meeting.date = configs.date
  meeting.assigns.push({
    interventionType: 'initialSong', order: assignCounter++, ...parseAssign($('#section1 > div > ul > li > #p3').text().trim())
  })
  meeting.assigns.push({
    interventionType: 'openingComments', order: assignCounter++, ...parseAssign($('#section1 > div > ul > li > #p4').text().trim())
  })

  $('#section2 > div > ul > li > p').each((i, el) => {
    const assign = $(el).text().trim()
    meeting.assigns.push({ interventionType: 'treasures', order: assignCounter++, ...parseAssign(assign) })
  })

  $('#section3 > div > ul > li > p').each((i, el) => {
    const assign = $(el).text().trim()
    meeting.assigns.push({ interventionType: 'ministrySchool', order: assignCounter++, ...parseAssign(assign) })
  })

  $('#section4 > div > ul > li > p').each((i, el) => {
    const assign = $(el).text().trim()
    meeting.assigns.push({ interventionType: 'livingChristians', order: assignCounter++, ...parseAssign(assign) })
  })

  return meeting
}
