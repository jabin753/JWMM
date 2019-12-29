'use strict'

const rp = require('request-promise')
const debug = require('debug')('jwmm:scrapper:index')
const defaults = require('defaults')
const cheerio = require('cheerio')
const utils = require('./utils')
const chalk = require('chalk')

module.exports = async function wol (config) {
  debug(`${chalk.blue('Scrapper initializing...')}`)
  const configs = defaults(config, {
    lang: 'en',
    date: Date.now()
  })
  const url = utils.getUrl(configs)
  debug(`${chalk.blue(`request to ${url}`)}`)
  const html = await rp(url)
  const $ = cheerio.load(html)
  debug(`${chalk.green(`received from ${url}`)}`)

  let opening = []
  opening.push($('#p3').text().trim())
  opening.push($('#p4').text().trim())

  // TREASURES
  let section1 = []
  $('#section2 > div > ul > li > p').each((i,el) => section1.push($(el).text()))

  // APPLY YOURSELF
  let section2 = []
  $('#section3 > div > ul > li > p').each((i,el) => section2.push($(el).text()))

  // LIVING
  let section3 = []
  $('#section4 > div > ul > li > p').each((i,el) => section3.push($(el).text()))

  return {
    opening,
    section1,
    section2,
    section3
  }
}