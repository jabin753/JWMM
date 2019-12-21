'use strict'

const db = require('./')
const assignFixtures = require('./tests/fixtures/assign')
async function setup () {
  const config = {
    database: process.env.DB_NAME || 'jwmm',
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    setup: false
  }
  const { Assign } = await db(config).catch(handleFatalError)
  assignFixtures.all.forEach(assign => Assign.createAssign(assign).catch(handleFatalError))

  // await Assign.createAssign(assignFixtures.single).catch(handleFatalError)
  const res = await Assign.findAll()
  res.forEach(assign => console.log(assign.dataValues.uuid))
  // console.log(res[0])
  console.log('Success!')
  process.exit(0)
}

function handleFatalError (err) {
  console.error(`${err.message}`)
  console.error(err.stack)
  process.exit(1)
}

setup()
