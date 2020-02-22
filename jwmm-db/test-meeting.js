'use strict'

require('dotenv').config()
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
  const { Assign, Member, Meeting } = await db(config).catch(handleFatalError)
  const meeting = {
    type: 'Life and Ministry',
    date: '2020-02-18',
    assigns: [{
      interventionType: 'treasures2',
      title: 'Bible Reading',
      length: '4 min. or less',
      description: 'Ge 18:1-19',
      lesson: 12
    }, {
      interventionType: 'ministrySchool0',
      title: 'First Return Visit Video',
      length: '5 min.',
      description: 'Discussion. Play the video. Then ask the audience the following questions How did the publisher properly introduce the scripture? How did he make clear the application of the scripture?'
    }]
  }
  const res = await Meeting.create(meeting, {
    include: [{
      model: Assign,
      include: [Member]
    }]
  })
  console.log(res)
}

function handleFatalError (err) {
  console.error(`${err.message}`)
  console.error(err.stack)
  process.exit(1)
}

setup()
