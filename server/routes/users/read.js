const http = require('http')

module.exports = function ({ usersURL }) {
  return {
    fatchAll: async function (req, res) {
      http.get(`${usersURL}api/users`, resp => {
        res.set({
          'Content-Type': 'application/json'
        })

        resp.pipe(res)
      })
    },

    fetchOne: async function (req, res) {
      http.get(`${usersURL}api/users/${req.params.id}`, resp => {
        res.set({
          'Content-Type': 'application/json'
        })

        resp.pipe(res)
      })
    }
  }
}
