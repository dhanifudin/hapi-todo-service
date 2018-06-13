'use strict'

const mongoose = require('mongoose')
const util = require('../lib/util')

const User = new mongoose.Schema({
  email: {
    type: String,
  },
  name: {
    type: String
  },
  password: {
    type: String
  }
})

User.method('toJSON', function () {
  const user = this.toObject({ virtuals: true })
  delete user._id
  delete user.password
  delete user.__v
  return user
})

User.pre('save', async function (next) {
  const user = this
  if (!user.isModified('password')) return next()
  user.password = await util.encrypt(user.password)
  next()
})

module.exports = mongoose.model('User', User)
