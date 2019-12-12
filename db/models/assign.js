'use strict'

const { Model, DataTypes } = require('sequelize')
const setupDatabase = require('../lib/db')

class AssignModel extends Model {}
module.exports = function setupAssignModel (config) {
  const sequelize = setupDatabase(config)
  AssignModel.init({
    uuid: {
      type: DataTypes.UUID,
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, { sequelize, modelName: 'assign' })
  return AssignModel
}
