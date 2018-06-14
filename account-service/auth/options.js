'use strict'

const joi = require('joi')

module.exports = {
  login: {
    validate: {
      payload: {
        username: joi.string().required()
      }
    }
  }
}
