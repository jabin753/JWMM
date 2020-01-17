'use strict'
const uuidv4 = require('uuid/v4')
const { DataTypes, Model } = require('sequelize')
const setupDatabase = require('../lib/db')

class MemberModel extends Model {
  static createMember (values) {
    const member = { uuid: uuidv4(), ...values }
    return this.create(member)
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
    phone: {
      type: DataTypes.STRING
    },
    genre: {
      type: DataTypes.STRING
    },
    isServant: {
      type: DataTypes.BOOLEAN
    },
    isAssistant: {
      type: DataTypes.BOOLEAN
    },
    birthDate: {
      type: DataTypes.DATEONLY
    },
    notes: {
      type: DataTypes.TEXT
    }
  }, { sequelize, modelName: 'member' })

  return MemberModel
}
