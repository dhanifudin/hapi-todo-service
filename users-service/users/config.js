const joi = require('joi')

module.exports = {
  list: {
    auth: false,
  },
  store: {
    auth: false,
    validate: {
      payload: {
        email: joi.string().required(),
        name: joi.string().required(),
        password: joi.string().required(),
      }
    }
  },
  show: {
    auth: false,
  },
  update: {
    auth: false,
  },
  destroy: {
    auth: false,
  }
}
