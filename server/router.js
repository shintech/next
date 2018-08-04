const express = require('express')
const posts = require('./api/posts')

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
  return router
}
