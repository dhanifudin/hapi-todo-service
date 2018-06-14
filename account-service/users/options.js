'use strict'

const joi = require('joi')
const joiObjectId = require('../lib/joi-objectid')

const headers = joi.object({
  user: joi.string().required()
}).options({ allowUnknown: true })

module.exports = {
  list: {
  },
  store: {
    validate: {
      payload: {
        username: joi.string().required(),
        name: joi.string().required(),
        password: joi.string().required(),
      }
    }
  },
  show: {
    validate: {
      params: {
        id: joiObjectId.string().objectId().required(),
      }
    }
  },
  update: {
    validate: {
      headers,
      params: {
        id: joiObjectId.string().objectId().required(),
      },
      payload: {
        name: joi.string().required(),
        password: joi.string().required(),
      }
    }
  },
  destroy: {
    validate: {
      headers,
      params: {
        id: joiObjectId.string().objectId().required(),
      }
    }
  }
}
