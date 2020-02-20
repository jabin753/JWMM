'use strict'
const uuidv4 = require('uuid/v4')
const { Model, DataTypes } = require('sequelize')
const setupDatabase = require('../lib/db')

class MeetingModel extends Model {
  static createMeeting (values, options = {}) {
    const meeting = { uuid: uuidv4(), ...values }
    return this.create(meeting, options)
  }
}
module.exports = function setupMeetingModel (config) {
  const sequelize = setupDatabase(config)
  MeetingModel.init({
    uuid: {
      type: DataTypes.UUID
    },
    type: {
      type: DataTypes.STRING
    },
    date: {
      type: DataTypes.DATEONLY
    },
    details: {
      type: DataTypes.JSON
    }
  }, { sequelize, modelName: 'meeting' })
  return MeetingModel
}
