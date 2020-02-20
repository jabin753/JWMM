'use strict'
require('dotenv/config')
const db = require('./')
const assignFixtures = require('./tests/fixtures/assign')
const memberFixtures = require('./tests/fixtures/member')
const meetingFixtures = require('./tests/fixtures/meeting')

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

  // for(let assign of assignFixtures.all) {
  //   await Assign.createAssign(assign)
  // }

  // for(let member of memberFixtures.all) {
  //   await Member.createMember(member)
  // }

  // for(let meeting of meetingFixtures.all) {
  //   await Meeting.createMeeting(meeting)
  // }
  const mixed = assignFixtures.single
  mixed.Member = memberFixtures.single
  mixed.Meeting = meetingFixtures.single
  // console.log(mixed)

  await Assign.createAssign(mixed, {
    include: [{
      model: Member,
      as: 'assignedHelper'
    }, {
      model: Meeting
    }]
  })

  process.exit(0)
}

function handleFatalError (err) {
  console.error(`${err.message}`)
  console.error(err.stack)
  process.exit(1)
}

setup()
