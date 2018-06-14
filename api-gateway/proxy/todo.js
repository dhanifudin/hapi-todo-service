'use strict'

const endpoint = process.env.TODO_ENDPOINT
const routes = [
  { method: 'GET', path: '/todo' },
  { method: 'POST', path: '/todo' },
  { method: 'GET', path: '/todo/{id}' },
  { method: 'PUT', path: '/todo/{id}' },
  { method: 'PUT', path: '/todo/{id}/{done}' },
  { method: 'DELETE', path: '/todo/{id}' },
]

const proxy = require('../lib/proxy')(endpoint, routes)
module.exports = proxy
