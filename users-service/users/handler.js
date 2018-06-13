'use strict'

const boom = require('boom')
const repository = require('./repository')

module.exports = {
  list: async (request, h) => {
    try {
      const result = await repository.findAll()
      return h.response(result)
    } catch (err) {
      return h.response(boom.badImplementation())
    }
  },
  store: async (request, h) => {

  },
  show: async (request, h) => {
    try {
      const { id } = request.params
      const result = await repository.findOne(id)
      if (!result) return h.response(boom.notFound())
      return h.response(result)
    } catch (err) {
      console.error(err)
      return h.response(boom.badImplementation())
    }
  },
  update: async (request, h) => {

  },
  destroy: async (request, h) => {

  }
}
