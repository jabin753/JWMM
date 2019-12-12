'use strict'

const setupDatabase = require('./lib/db')
const setupAssignModel = require('./models/assign')
const setupMemberModel = require('./models/member')

module.exports = async function (config) {
  const sequelize = setupDatabase(config)
  const Assign = setupAssignModel(config)
  const Member = setupMemberModel(config)

  Member.hasMany(Assign)
  Assign.belongsTo(Member, { as: 'encargado' })
  Assign.belongsTo(Member, { as: 'ayudante' })

  await sequelize.authenticate()

  if (config.setup) {
    await sequelize.sync({ force: true })
  }

  return {
    Assign,
    Member
  }
}
