'use strict'

const joi = require('joi')
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
        id: joi.string().required(),
      }
    }
  },
  update: {
    validate: {
      headers,
      params: {
        id: joi.string().required(),
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
        id: joi.string().required(),
      }
    }
  }
}
