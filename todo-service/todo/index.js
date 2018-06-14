'use strict'

const handler = require('./handler')
const options = require('./options')
const resource = 'todo'

module.exports = {
  name: 'todo',
  register: async (server) => {
    const routes = [{
      method: 'GET',
      path: `/${resource}`,
      handler: handler.list,
      options: options.list,
    }, {
      method: 'POST',
      path: `/${resource}`,
      handler: handler.store,
      options: options.store,
    }, {
      method: 'GET',
      path: `/${resource}/{id}`,
      handler: handler.show,
      options: options.show,
    }, {
      method: 'PUT',
      path: `/${resource}/{id}`,
      handler: handler.update,
      options: options.update,
    }, {
      method: 'DELETE',
      path: `/${resource}/{id}`,
      handler: handler.destroy,
      options: options.destroy,
    }]
    server.route(routes)
  }
}
