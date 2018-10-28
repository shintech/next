const http = require('http')

module.exports = function ({ devicesURL }) {
  return {
    fetchDevices: async function (req, res) {
      http.get(`${devicesURL}api/inventory`, resp => {
        res.set({
          'Content-Type': 'application/json'
        })

        resp.pipe(res)
      })
    },

    searchDevices: async function (req, res) {
      const postId = req.query.slug

      http.get(`${devicesURL}api/search?slug=${postId}`, resp => {
        res.set({
          'Content-Type': 'application/json'
        })

        resp.pipe(res)
      })
    }
  }
}
