'use strict'

const Joi = require('joi')
const mongoose = require('mongoose')

const joiObjectId = Joi.extend((joi) => ({
  base: joi.string(),
  name: 'string',
  language: {
    objectId: 'needs to be a mongodb objectId'
  },
  rules: [{
    name: 'objectId',
    validate(params, value, state, options) {
      if (!mongoose.Types.ObjectId.isValid(value)) {
        return this.createError('string.objectId', { v: value  }, state, options)
      }
      return value
    }
  }]
}))

module.exports = joiObjectId
