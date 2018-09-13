const http = require('http')
const remote = process.env['MONGO_URL']

module.exports = function ({ logger }) {
  return {
    fatchAll: async function (req, res) {
      http.get(`http://${remote}/api/users`, resp => {
        res.set({
          'Content-Type': 'application/json'
        })

        resp.pipe(res)
      })
    },

    fetchOne: async function (req, res) {
      http.get(`http://${remote}/api/users/${req.params.id}`, resp => {
        res.set({
          'Content-Type': 'application/json'
        })

        resp.pipe(res)
      })
    }
  }
}
