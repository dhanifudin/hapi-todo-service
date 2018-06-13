'use strict'

require('dotenv').config()

const hapi = require('hapi')
const mongoose = require('./lib/mongoose')

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
    const routes = [
      require('./auth'),
      require('./users'),
    ]
    await server.register(routes)

    await mongoose.connect()
    await server.start()
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
  console.log('Server running at: ', server.info.uri)
}

start()
