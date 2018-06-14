'use strict'

const handler = require('./handler')
const options = require('./options')

module.exports = {
  name: 'auth',
  register: async (server) => {
    const routes = [{
      method: 'POST',
      path: '/auth/login',
      handler: handler.login,
      options: options.login,
    }]
    server.route(routes)
  }
}
