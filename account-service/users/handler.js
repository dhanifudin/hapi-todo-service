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
      const result = await repository.findOne(id)
      if (!result) return h.response(boom.notFound())
      return h.response(result)
    } catch (err) {
      console.error(err)
      throw boom.badImplementation()
    }
  },
  update: async (request, h) => {
    try {
      const { id } = request.params
      const { payload } = request
      const result = await repository.update(id, payload)
      return (!result) ? h.response(boom.notFound()) : h.response(result)
    } catch (err) {
      console.log(err)
      throw boom.badImplementation()
    }
  },
  destroy: async (request, h) => {
    try {
      const { id } = request.params
      const result = await repository.destroy({ _id: id })
      return (!result) ? h.response(boom.notFound()) : h.response(result)
    } catch (err) {
      console.log(err)
      throw boom.badImplementation()
    }
  }
}
