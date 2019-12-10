'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMemberModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('member', {
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
  })
}
