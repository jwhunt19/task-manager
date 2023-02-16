const mongoose = require('mongoose')
const validator = require('validator')

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

// User Model
const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value){
      if(!validator.isEmail(value)) {
        throw new Error('Email is invalid')
      }
    }
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(value) {
      if (value.includes('password')) {
        throw new Error('password must not contain the phrase \'password\'')
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) throw new Error ('age must not be a negative number')
    }
  },
})

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

//creating a Task
const task = new Task({
  description: 'buy a thousand pizzas',
})

task.save().then(() => {
  console.log(task)
}).catch((error) => {
  console.log(error)
})

// creating a User
// const me = new User({
//   name: '   brandon   ',
//   email: 'branm@gmail.com    ',
//   password: '1234567'
// })

// me.save().then(() => {
//   console.log(me)
// }).catch((error) => {
//   console.log(error)
// })

