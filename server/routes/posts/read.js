const http = require('http')

module.exports = function ({ postsURL, logger }) {
  return {
    fatchAll: async function (req, res) {
      http.get(`${postsURL}api/posts`, resp => {
        res.set({
          'Content-Type': 'application/json'
        })

        resp.pipe(res)
      })

        .on('error', err => {
          res.json({
            error: err.message
          })
        })

        .end()
    },

    fetchOne: async function (req, res) {
      const postId = req.params.id

      http.get(`${postsURL}api/posts/${postId}`, resp => {
        res.set({
          'Content-Type': 'application/json'
        })

        resp.pipe(res)
      })

        .on('error', err => {
          res.json({
            error: err.message
          })
        })

        .end()
    }
  }
}
