'use strict'

const debug = require('debug')('jwmm:api:db')
require('dotenv/config')

module.exports = {
  db: {
    database: process.env.DB_NAME || 'jwmm',
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: s => debug(s)
  },
  auth: {
    secret: process.env.SECRET || 'jwmm'
  }
}
