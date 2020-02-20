'use strict'
const { DataTypes } = require('sequelize')
const setupDatabase = require('./lib/db')
const setupAssignModel = require('./models/assign')
const setupMemberModel = require('./models/member')
const setupMeetingModel = require('./models/meeting')
const setupAssignMembersModel = require('./models/assignMembers')

module.exports = async function (config) {
  const sequelize = setupDatabase(config)
  const Assign = setupAssignModel(config)
  const Member = setupMemberModel(config)
  const Meeting = setupMeetingModel(config)
  const AssignMembers = setupAssignMembersModel(config)

  Meeting.hasMany(Assign)
  Assign.belongsTo(Meeting)
  Member.belongsToMany(Assign, { through: AssignMembers })

  await sequelize.authenticate()

  if (config.setup) {
    await sequelize.sync({ force: true })
  }

  return {
    Assign,
    Member,
    Meeting,
    AssignMembers
  }
}
