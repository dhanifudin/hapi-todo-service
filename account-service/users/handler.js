'use strict'

const boom = require('boom')
const repository = require('./repository')

module.exports = {
  list: async (request, h) => {
    try {
      const result = await repository.findAll()
      return h.response(result)
    } catch (err) {
      throw boom.badImplementation()
    }
  },
  store: async (request, h) => {
    try {
      const { payload } = request
      const result = await repository.save(payload)
      return h.response(result)
    } catch (err) {
      console.log(err)
      throw boom.badImplementation()
    }
  },
  show: async (request, h) => {
    try {
      const { id } = request.params
      const result = await repository.findOne({ _id: id })
      if (!result) throw boom.notFound()
      return h.response(result)
    } catch (err) {
      console.error(err)
      throw boom.badImplementation()
    }
  },
  update: async (request, h) => {
    try {
      const { id } = request.params
      const { user } = request.headers
      const query = { _id: id, user }
      const { payload } = request
      const result = await repository.update(query, payload)
      if (!result) throw boom.notFound()
      return h.response(result)
    } catch (err) {
      console.log(err)
      throw boom.badImplementation()
    }
  },
  destroy: async (request, h) => {
    try {
      const { id } = request.params
      const { user } = request.headers
      const query = { _id: id, user }
      const result = await repository.destroy(query)
      if (!result) throw boom.notFound()
      return h.response(result)
    } catch (err) {
      console.log(err)
      throw boom.badImplementation()
    }
  }
}
