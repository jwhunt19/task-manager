const express = require('express')
require('./db/mongoose')

const User = require('./models/user')
const Task = require('./models/task')

const app = express();
const port = process.env.PORT || 3000

// Express middleware for parsing JSON requests
app.use(express.json())

// Create User
app.post('/users', (req, res) => {
  const user = new User(req.body)

  user.save().then(() => {
    res.status(201).send(user)
  }).catch((e) => {
    res.status(400).send(e)
  })
})

// Create Task
app.post('/tasks', (req, res) => {
  const task = new Task(req.body)

  task.save().then(() => {
    res.status(201).send(task)
  }).catch((e) => {
    res.status(400).send(e)
  })
})

// Start server
app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})
