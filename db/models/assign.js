'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupAssignModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('assign', {
    uuid: {
      type: Sequelize.STRING,
      allowNull: false
    },
    date: {
      type: Sequelize.DATEONLY,
      allowNull: false
    }

  })
}
