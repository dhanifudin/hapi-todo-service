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
        let filter = query
        if (typeof query !== 'object') {
          if (!mongoose.Types.ObjectId.isValid(query)) {
            throw new Error('Invalid ObjectId')
          }
          filter = { _id: query }
        }
        const result = await collection.findOne(filter)
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
    update: async (id, payload) => {
      try {
        const options = { new: true }
        const result = await collection
          .findOneAndUpdate(id, payload, options)
        return result
      } catch (err) {
        throw err
      }
    },
    destroy: async (query) => {
      try {
        const result = await collection.findOneAndRemove(query)
        return result
      } catch (err) {
        throw err
      }
    }
  }
  return repository
}
