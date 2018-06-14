'use strict'

const h2o2 = require('h2o2')

const users = require('./users')
const todo = require('./todo')
const proxies = [].concat(users, todo)

module.exports = {
  name: 'proxy',
  register: async (server) => {
    await server.register(h2o2)
    await server.route(proxies)
  }
}
