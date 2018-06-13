'use strict'

require('dotenv').config()

const hapi = require('hapi')
const jwt = require('./lib/jwt')

const server = hapi.server({
  host: process.env.APP_HOST,
  port: process.env.APP_PORT,
  routes: {
    cors: {
      origin: [ '*' ]
    }
  }
})

const start = async () => {
  try {
    const plugins = [
      jwt,
      require('./proxy'),
    ]
    await server.register(plugins)
    await server.start()
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
  console.log('Server running at: ', server.info.uri)
}

start()
