'use strict'
module.exports = function setupAssign (AssignModel) {
  async function createOrUpdate (assign) {
    const cond = {
      where: {
        uuid: assign.uuid
      }
    }
    const existingAssign = await AssignModel.findOne(cond)
    if (existingAssign) {
      const updated = await AssignModel.update(assign, cond)
      return updated ? AssignModel.findOne(cond) : existingAssign
    }
    const result = await AssignModel.create(assign)
    return result.toJson()
  }
  function findById (id) {
    return AssignModel.findById(id)
  }
  return {
    createOrUpdate,
    findById
  }
}
