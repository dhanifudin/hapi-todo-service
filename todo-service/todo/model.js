'use strict'

const mongoose = require('mongoose')

const Todo = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    index: true
  },
  todo: {
    type: String,
  },
  done: {
    type: Boolean,
    default: false,
  }
})

Todo.method('toJSON', function () {
  const obj = this.toObject({ virtuals: true })
  delete obj._id
  delete obj.__v
  return obj
})

module.exports = mongoose.model('Todo', Todo)
