const joi = require('joi')

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
  },
  update: {
  },
  destroy: {
  }
}
