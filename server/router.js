const express = require('express')
const path = require('path')

const posts = require('./routes/posts')
const users = require('./routes/users')
const devices = require('./routes/devices')

const router = express.Router()


module.exports = function (options) {
  router.get('/state', (req, res) =>
    res.status(200).json({
      status: 'ok'
    })
  )

  router.route('/posts')
    .get(posts(options).fatchAll)
    .post(posts(options).addOne)

  router.route('/posts/:id')
    .get(posts(options).fetchOne)

  router.route('/users')
    .get(users(options).fatchAll)
    .post(users(options).addOne)

  router.route('/users/:id')
    .get(users(options).fetchOne)

  router.route('/inventory')
    .get(devices(options).fetchDevices)

  router.route('/search')
    .get(devices(options).searchDevices)

  return router
}
