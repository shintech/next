const express = require('express')
const posts = require('./api/posts')
const about = require('./api/about')

const router = express.Router()

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

  router.route('/tasks')
    .get(about(options).fatchAll)
    .post(about(options).createTask)

  router.route('/tasks/:id')
    .get(about(options).fetchOne)

  return router
}
