const mongoose = require('mongoose')

//Task Model
const Task = new mongoose.model('Task', {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false
  }
})

module.exports = Task
