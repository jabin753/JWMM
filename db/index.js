'use strict'

const setupDatabase = require('./lib/db')
const setupAssign = require('./lib/controller/assign')
const setupMember = require('./lib/controller/member')
const setupAssignModel = require('./models/assign')
const setupMemberModel = require('./models/member')

module.exports = async function (config) {
  const sequelize = setupDatabase(config)
  const AssignModel = setupAssignModel(config)
  const MemberModel = setupMemberModel(config)

  MemberModel.hasMany(AssignModel)
  AssignModel.belongsTo(MemberModel, { as: 'encargado' })
  AssignModel.belongsTo(MemberModel, { as: 'ayudante' })

  await sequelize.authenticate()

  if (config.setup) {
    await sequelize.sync({ force: true })
  }

  const Assign = setupAssign(AssignModel)
  const Member = setupMember(MemberModel)

  return {
    Assign,
    Member
  }
}
