'use strict'

module.exports = (mongoose, model) => {
  const collection = (typeof model === 'string')
    ? mongoose.model(model) : model

  const repository = {
    findAll: async (query, limit = 10) => {
      try {
        const result = await collection.find(query)
          .sort()
          .limit(limit)
          .exec()
        return result
      } catch (err) {
        throw err
      }
    },
    findOne: async (id) => {
      try {
        const result = await collection.findOne({ _id: id })
          .exec()
        return result
      } catch (err) {
        throw err
      }
    }
  }
  return repository
}
