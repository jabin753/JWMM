'use strict'

const rp = require('request-promise')
const debug = require('debug')('jwmm:scrapper:index')
const defaults = require('defaults')
const cheerio = require('cheerio')
const { getUrl, parseAssign } = require('./utils')
const chalk = require('chalk')

module.exports =  async function wol (config) {
  debug(`${chalk.blue('Scrapper initializing...')}`)
  const configs = defaults(config, {
    lang: 'en',
    date: Date.now()
  })
  const url = getUrl(configs)
  debug(`${chalk.blue(`request to ${url}`)}`)
  const html = await rp(url)
  const $ = cheerio.load(html)
  debug(`${chalk.green(`received from ${url}`)}`)
  debug(`${chalk.green(`html Content: ${html}`)}`)

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
    openingComments,
    initialSong,
    bibleTreasures,
    ministrySchool,
    livingChristians
  }
}
