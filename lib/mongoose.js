const mongoose = require('mongoose')

const host = process.env.MONGO_HOST || '127.0.0.1'
const port = process.env.MONGO_PORT || '27017'
const database = process.env.MONGO_DB
const url = `mongodb://${host}:${port}/${database}`

module.exports = {
  connect: async () => {
    try {
      const result = await mongoose.connect(url)
      mongoose.Promise = global.Promise
      if (result) console.log('Mongodb connection successfull')
    } catch (err) {
      console.error(err)
    }
  }
}

