'use strict'
const uuidv4 = require('uuid/v4')
const { Model, DataTypes } = require('sequelize')
const setupDatabase = require('../lib/db')

class AssignModel extends Model {
  static createAssign (values) {
    const assign = { uuid: uuidv4(), ...values }
    return this.create(assign)
  }
}
module.exports = function setupAssignModel (config) {
  const sequelize = setupDatabase(config)
  AssignModel.init({
    uuid: {
      type: DataTypes.UUID
    },
    date: {
      type: DataTypes.DATEONLY
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
      type: DataTypes.INTEGER
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
