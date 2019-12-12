'use strict'
module.exports = function setupMember (MemberModel) {
  async function createOrUpdate (member) {
    const cond = {
      where: {
        uuid: member.uuid
      }
    }
    const existingMember = await MemberModel.findOne(cond)
    if (existingMember) {
      const updated = await MemberModel.update(member, cond)
      return updated ? MemberModel.findOne(cond) : existingMember
    }
    const result = await MemberModel.create(member)
    return result.toJson()
  }
  function findById (id) {
    return MemberModel.findById(id)
  }
  return {
    createOrUpdate,
    findById
  }
}
