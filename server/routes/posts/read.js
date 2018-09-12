const http = require('http')
const remote = process.env['SERVER_URL']

module.exports = function ({ logger }) {
  return {
    fatchAll: async function (req, res) {
      http.get(`http://${remote}/api/posts`, resp => {
        res.set({
          'Content-Type': 'application/json'
        })
        resp.pipe(res)
      })
    },

    fetchOne: async function (req, res) {
      const postId = parseInt(req.params.id)

      http.get(`http://${remote}/api/posts/${postId}`, resp => {
        res.set({
          'Content-Type': 'application/json'
        })

        resp.pipe(res)
      })
    }
  }
}
