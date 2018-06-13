'use strict'

const endpoint = process.env.ACCOUNT_ENDPOINT
const routes = [
  { method: 'GET', path: '/users', config: { auth: false } },
  { method: 'POST', path: '/users', config: { auth: false } },
  { method: 'GET', path: '/users/{id}', config: { auth: false } },
  { method: 'PUT', path: '/users/{id}' },
  { method: 'DELETE', path: '/users/{id}' },
]

const proxy = require('../lib/proxy')(endpoint, routes)
module.exports = proxy
