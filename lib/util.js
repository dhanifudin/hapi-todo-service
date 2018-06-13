'use strict'

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
  encrypt: async (payload) => {
    const hashedPayload = await bcrypt.hash(payload, 10)
    return hashedPayload
  },
  compare: async (password1, password2) => {
    const valid = await bcrypt.compare(password1, password2)
    return valid
  },
  createToken: async (payload) => {
    const key = process.env.JWT_KEY
    const token = await jwt.sign(payload, key, {
      algorithm: process.env.JWT_ALGORITHM || 'HS256',
      expiresIn: process.env.JWT_EXPIRATION || '7d',
    })
    return token
  },
}
