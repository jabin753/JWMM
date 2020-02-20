'use strict'
const { Model, DataTypes } = require('sequelize')
const setupDatabase = require('../lib/db')

class assignMembersModel extends Model {
}
module.exports = function setupAssignMembersModel (config) {
  const sequelize = setupDatabase(config)
  assignMembersModel.init({
    isHelper: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, { sequelize, modelName: 'assignMembers' })
  return assignMembersModel
}
