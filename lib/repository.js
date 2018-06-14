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
    findOne: async (query) => {
      try {
        const result = await collection
          .findOne(query)
          .exec()
        return result
      } catch (err) {
        throw err
      }
    },
    save: async (payload) => {
      try {
        const result = await new collection(payload)
          .save()
        return result
      } catch (err) {
        throw err
      }
    },
    update: async (query, payload) => {
      try {
        const options = { new: true }
        const result = await collection
          .findOneAndUpdate(query, payload, options)
        return result
      } catch (err) {
        throw err
      }
    },
    destroy: async (query) => {
      try {
        const result = await collection
          .findOneAndRemove(query)
        return result
      } catch (err) {
        throw err
      }
    }
  }
  return repository
}
