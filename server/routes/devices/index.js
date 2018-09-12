const http = require('http')
const remote = process.env['ELASTIC_URL']

module.exports = function ({ logger }) {
  return {
    fetchDevices: async function (req, res) {
      http.get(`http://${remote}/api/inventory`, resp => {
        res.set({
          'Content-Type': 'application/json'
        })

        resp.pipe(res)
      })
    },

    searchDevices: async function (req, res) {
      const postId = req.query.slug

      http.get(`http://${remote}/api/search?slug=${postId}`, resp => {
        res.set({
          'Content-Type': 'application/json'
        })

        resp.pipe(res)
      })
    }
  }
}
