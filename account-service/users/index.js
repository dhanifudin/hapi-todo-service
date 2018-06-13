'use strict'

const handler = require('./handler')
const config = require('./config')
const resource = 'users'

module.exports = {
  name: 'users',
  register: async (server) => {
    const routes = [{
      method: 'GET',
      path: `/${resource}`,
      handler: handler.list,
      config: config.list,
    }, {
      method: 'POST',
      path: `/${resource}`,
      handler: handler.store,
      config: config.store,
    }, {
      method: 'GET',
      path: `/${resource}/{id}`,
      handler: handler.show,
      config: config.show,
    }, {
      method: 'PUT',
      path: `/${resource}/{id}`,
      handler: handler.update,
      config: config.update,
    }, {
      method: 'DELETE',
      path: `/${resource}/{id}`,
      handler: handler.destroy,
      config: config.destroy,
    }]
    server.route(routes)
  }
}
