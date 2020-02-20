'use strict'

const meeting = {
  type: 'Life and Ministry',
  date: '2020-02-18'
}
const meeting2 = {
  type: 'Life and Ministry',
  date: '2020-01-17',
  details: {
    isServantVisit: true
  }
}
const meeting3 = {
  type: 'Watchtower Study',
  date: '2020-02-23'
}
module.exports = {
  single: meeting,
  all: [meeting, meeting2, meeting3]
}
