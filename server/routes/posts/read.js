const http = require('http')
const remote = process.env['POSTGRES_HOST']
const port = process.env['POSTGRES_PORT']

module.exports = function ({ logger }) {
  return {
    fatchAll: async function (req, res) {
      http.get(`http://${remote}:${port}/api/posts`, resp => {
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
      const postId = parseInt(req.params.id)

      http.get(`http://${remote}:${port}/api/posts/${postId}`, resp => {
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
