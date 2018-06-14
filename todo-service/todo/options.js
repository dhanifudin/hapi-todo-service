'use strict'

const joi = require('joi')
const headers = joi.object({
  user: joi.string().required()
}).options({ allowUnknown: true })

module.exports = {
  list: {
    validate: {
      headers,
    }
  },
  store: {
    validate: {
      headers,
      payload: {
        todo: joi.string().required(),
      }
    }
  },
  show: {
    validate: {
      headers,
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
      }
    }
  },
  done: {
    validate: {
      headers,
      params: {
        id: joi.string().required(),
        done: joi.string().allow(['done', 'undone']).required()
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
