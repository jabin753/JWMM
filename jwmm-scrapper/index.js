'use strict'

const rp = require('request-promise')
const debug = require('debug')('jwmm:scrapper')
const defaults = require('defaults')
const cheerio = require('cheerio')
const { getUrl, parseAssign } = require('./utils')
const chalk = require('chalk')

module.exports = async function wol (config) {
  debug(`${chalk.blue('Scrapper initializing...')}`)
  const configs = defaults(config, {
    lang: 'en',
    date: Date.now()
  })
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
  const initialSong = parseAssign($('#section1 > div > ul > li > #p3').text().trim())
  const openingComments = parseAssign($('#section1 > div > ul > li > #p4').text().trim())

  // TREASURES
  const bibleTreasures = []
  $('#section2 > div > ul > li > p').each((i, el) => {
    const assign = $(el).text().trim()
    bibleTreasures.push(parseAssign(assign))
  })

  // APPLY YOURSELF
  const ministrySchool = []
  $('#section3 > div > ul > li > p').each((i, el) => {
    const assign = $(el).text().trim()
    ministrySchool.push(parseAssign(assign))
  })

  // LIVING
  const livingChristians = []
  $('#section4 > div > ul > li > p').each((i, el) => {
    const assign = $(el).text().trim()
    livingChristians.push(parseAssign(assign))
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
