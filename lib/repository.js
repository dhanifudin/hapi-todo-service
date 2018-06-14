'use strict'

module.exports = (mongoose, model) => {
  const collection = (typeof model === 'string')
    ? mongoose.model(model) : model

  const filterHelper = (query) => {
    if (typeof query !== 'object') {
      if (!mongoose.Types.ObjectId.isValid(query)) {
        throw new Error('Invalid ObjectId')
      }
      query = { _id: query }
    }
    return query
  }

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
        const filter = filterHelper(query)
        const result = await collection
          .findOne(filter)
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
        const filter = filterHelper(query)
        const options = { new: true }
        const result = await collection
          .findOneAndUpdate(filter, payload, options)
        return result
      } catch (err) {
        throw err
      }
    },
    destroy: async (query) => {
      try {
        const filter = filterHelper(query)
        const result = await collection
          .findOneAndRemove(filter)
        return result
      } catch (err) {
        throw err
      }
    }
  }
  return repository
}
