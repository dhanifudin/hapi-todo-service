'use strict'

const boom = require('boom')
const repository = require('./repository')

module.exports = {
  list: async (request, h) => {
    try {
      const { user } = request.headers
      const result = await repository.findAll({ user })
      return h.response(result)
    } catch (err) {
      throw boom.badImplementation()
    }
  },
  store: async (request, h) => {
    try {
      const { user } = request.headers
      const { payload } = request
      payload.user = user
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
      const { user } = request.headers
      const result = await repository.findOne(id)
      if (!result)
        throw boom.notFound()
      if (!result.user != user)
        throw boom.unauthorized()
      return h.response(result)
    } catch (err) {
      console.error(err)
      throw boom.badImplementation()
    }
  },
  update: async (request, h) => {
    try {
      const { id } = request.params
      // const { user } = request.headers
      const { payload } = request
      const result = await repository.update(id, payload)
      if (!result)
        throw boom.notFound()
      return h.response(result)
    } catch (err) {
      console.log(err)
      throw boom.badImplementation()
    }
  },
  destroy: async (request, h) => {
    try {
      const { id } = request.params
      const result = await repository.destroy(id)
      if (!result)
        throw boom.notFound()
      return h.response(result)
    } catch (err) {
      console.log(err)
      throw boom.badImplementation()
    }
  }
}
