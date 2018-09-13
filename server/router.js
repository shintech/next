const express = require('express')
const multer = require('multer')
const path = require('path')

const posts = require('./routes/posts')
const users = require('./routes/users')
const about = require('./routes/about')
const contact = require('./routes/contact')
const files = require('./routes/files')
const tasks = require('./routes/tasks')
const accounts = require('./routes/accounts')
const devices = require('./routes/devices')

const router = express.Router()

const storage = multer.diskStorage({
  destination: path.join('uploads'),
  filename (req, file, cb) {
    cb(null, `${new Date()}-${file.originalname}`)
  }
})

const upload = multer({ storage: storage })

module.exports = function (options) {
  router.get('/state', (req, res) =>
    res.status(200).json({
      status: 'ok'
    })
  )

  router.route('/posts')
    .get(posts(options).fatchAll)
    .post(posts(options).createPost)

  router.route('/posts/:id')
    .get(posts(options).fetchOne)

  router.route('/users')
    .get(users(options).fatchAll)

  router.route('/users/:id')
    .get(users(options).fetchOne)

  router.route('/about')
    .get(about(options).fatchAll)

  router.route('/tasks')
    .get(tasks(options).fatchAll)
    .post(tasks(options).createTask)

  router.route('/tasks/:_id')
    .delete(tasks(options).removeTask)

  router.route('/accounts')
    .get(accounts(options).fatchAll)

  router.route('/inventory')
    .get(devices(options).fetchDevices)

  router.route('/search')
    .get(devices(options).searchDevices)

  router.route('/contact')
    .get(contact(options).fatchAll)

  router.post('/files', upload.single('file'), files(options).createFile)

  return router
}
