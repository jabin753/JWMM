'use strict'
const uuidv4 = require('uuid/v4')
const { DataTypes, Model } = require('sequelize')
const setupDatabase = require('../lib/db')

class MemberModel extends Model {
  static createMember (values, options = {}) {
    const member = { uuid: uuidv4(), ...values }
    return this.create(member, options)
  }
}
module.exports = function setupMemberModel (config) {
  const sequelize = setupDatabase(config)
  MemberModel.init({
    uuid: {
      type: DataTypes.UUID,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    privileges: {
      type: DataTypes.JSON
    },
    notes: {
      type: DataTypes.TEXT
    },
    details: {
      type: DataTypes.JSON
    }
  }, { sequelize, modelName: 'member' })

  return MemberModel
}
