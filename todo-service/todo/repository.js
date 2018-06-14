const mongoose = require('mongoose')
const model = require('./model')
const repository = require('../lib/repository')(mongoose, model)

module.exports = repository
