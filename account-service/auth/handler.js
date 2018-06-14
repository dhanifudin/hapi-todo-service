'use strict'

const boom = require('boom')
const repo = require('../users/repository')
const util = require('../lib/util')

module.exports = {
  login: async (request, h) => {
    try {
      const { username, password } = request.payload
      const userFound = await repo.findOne({ username })
      if (!userFound) throw boom.notFound()

      console.log(userFound)
      const authenticatedUser = util.compare(password, userFound.password)
      if (!authenticatedUser) throw boom.unauthorized()

      const token = await util.createToken({ id: userFound.id })
      return h.response({ token })
    } catch (err) {
      console.error(err)
      throw boom.badImplementation()
    }
  }
}
