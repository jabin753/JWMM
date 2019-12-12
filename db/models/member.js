'use strict'

const { Sequelize, Model } = require('sequelize')
const setupDatabase = require('../lib/db')

class Member extends Model {}
module.exports = function setupMemberModel (config) {
  const sequelize = setupDatabase(config)
  Member.init({
    uuid: {
      type: Sequelize.STRING,
      allowNull: false
    },
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    genre: {
      type: Sequelize.STRING
    },
    isServant: {
      type: Sequelize.BOOLEAN
    },
    isAssistant: {
      type: Sequelize.BOOLEAN
    },
    birthDate: {
      type: Sequelize.DATEONLY
    },
    notes: {
      type: Sequelize.TEXT
    }
  }, { sequelize, modelName: 'member' })

  return Member
}
