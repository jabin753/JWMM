'use strict'
const uuidv4 = require('uuid/v4')
const { Model, DataTypes } = require('sequelize')
const setupDatabase = require('../lib/db')

class AssignModel extends Model {
  static createAssign (values, options = {}) {
    const assign = { uuid: uuidv4(), ...values }
    return this.create(assign, options)
  }
}
module.exports = function setupAssignModel (config) {
  const sequelize = setupDatabase(config)
  AssignModel.init({
    uuid: {
      type: DataTypes.UUID
    },
    interventionType: {
      type: DataTypes.STRING
    },
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    lengthTime: {
      type: DataTypes.STRING
    },
    givenIn: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lesson: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    details: {
      type: DataTypes.JSON,
      allowNull: true
    }

  }, { sequelize, modelName: 'assign' })
  return AssignModel
}
