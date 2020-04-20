'use strict'

const debug = require('debug')('jwmm:db')
require('dotenv').config()
const db = require('./')

async function setup () {
  const config = {
    database: process.env.DB_NAME || 'jwmm',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    host: process.env.DB_HOST || 'localhost',
    dialect: process.env.DIALECT || 'postgres',
    setup: true,
    logging: s => debug(s)
  }

  await db(config).catch(handleFatalError)

  console.log('Success!')
  process.exit(0)
}

function handleFatalError (err) {
  console.error(`${err.message}`)
  console.error(err.stack)
  process.exit(1)
}

setup()
