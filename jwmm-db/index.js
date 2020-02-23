'use strict'

const setupDatabase = require('./lib/db')
const setupAssignModel = require('./models/assign')
const setupMemberModel = require('./models/member')
const setupMeetingModel = require('./models/meeting')

module.exports = async function (config) {
  const sequelize = setupDatabase(config)
  const Assign = setupAssignModel(config)
  const Member = setupMemberModel(config)
  const Meeting = setupMeetingModel(config)

  Meeting.hasMany(Assign)
  Assign.belongsTo(Meeting)

  Member.hasMany(Assign, { as: 'member', foreignKey: 'memberId' })
  Member.hasMany(Assign, { as: 'helper', foreignKey: 'helperId' })
  Assign.belongsTo(Member)

  await sequelize.authenticate()

  if (config.setup) {
    await sequelize.sync({ force: true })
  }

  return {
    Assign,
    Member,
    Meeting
  }
}
