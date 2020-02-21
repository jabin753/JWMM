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
  // debug(`${chalk.green(`html Content: ${html}`)}`)

  // ACTUAL WEEK
  const week = $('#p1').text().trim()
  const initialSong = { interventionType: 'initialSong', ...parseAssign($('#section1 > div > ul > li > #p3').text().trim()) }
  const openingComments = { interventionType: 'openingComments', ...parseAssign($('#section1 > div > ul > li > #p4').text().trim()) }

  // TREASURES
  const bibleTreasures = []
  $('#section2 > div > ul > li > p').each((i, el) => {
    const assign = $(el).text().trim()
    bibleTreasures.push({ interventionType: `treasures${i}`, ...parseAssign(assign) })
  })

  // APPLY YOURSELF
  const ministrySchool = []
  $('#section3 > div > ul > li > p').each((i, el) => {
    const assign = $(el).text().trim()
    ministrySchool.push({ interventionType: `ministrySchool${i}`, ...parseAssign(assign) })
  })

  // LIVING
  const livingChristians = []
  $('#section4 > div > ul > li > p').each((i, el) => {
    const assign = $(el).text().trim()
    livingChristians.push({ interventionType: `livingChristians${i}`, ...parseAssign(assign) })
  })

  return {
    week,
    openingComments,
    initialSong,
    bibleTreasures,
    ministrySchool,
    livingChristians
  }
}
