'use strict'

const mongoose = require('mongoose')
const util = require('../lib/util')

const User = new mongoose.Schema({
  username: {
    type: String,
    index: true,
  },
  name: {
    type: String
  },
  password: {
    type: String
  }
})

User.method('toJSON', function () {
  const obj = this.toObject({ virtuals: true })
  delete obj._id
  delete obj.password
  delete obj.__v
  return obj
})

User.pre('save', async function (next) {
  const user = this
  if (!user.isModified('password')) return next()
  user.password = await util.encrypt(user.password)
  next()
})

module.exports = mongoose.model('User', User)
