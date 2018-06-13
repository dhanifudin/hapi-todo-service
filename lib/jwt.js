'use strict'

const jwt = require('hapi-auth-jwt2')
const wreck = require('wreck')

const validate = async (decoded) => {
  const options = { json: true }
  const uri = `${process.env.ACCOUNT_ENDPOINT}/users/${decoded.id}`
  const { payload } = await wreck.get(uri, options)
  const isValid = (payload.id == decoded.id)
  return { isValid }
}

module.exports = {
  name: 'jwt',
  register: async (server) => {
    await server.register(jwt)
    server.auth.strategy('jwt', 'jwt', {
      key: process.env.JWT_KEY,
      validate: validate,
      urlKey: false,
      verifyOptions: {
        algorithms: [ process.env.JWT_ALGORITHM || 'HS256']
      }
    })
    server.auth.default('jwt')
  }
}
