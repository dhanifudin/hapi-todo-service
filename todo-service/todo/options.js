'use strict'

const joi = require('joi')
const joiObjectId = require('../lib/joi-objectid')

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
        id: joiObjectId.string().objectId().required(),
      }
    }
  },
  update: {
    validate: {
      headers,
      params: {
        id: joiObjectId.string().objectId().required(),
      }
    }
  },
  done: {
    validate: {
      headers,
      params: {
        id: joiObjectId.string().objectId().required(),
        done: joi.string().allow(['done', 'undone']).required()
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
