const http = require('http')

module.exports = function ({ logger, usersURL }) {
  return {
    login: async function (req, res) {
      let postData = JSON.stringify(req.body)

      const options = {
        host: usersURL.hostname,
        path: `/api/users/login`,
        port: usersURL.port,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(postData)
        }
      }

      let request = http.request(options, resp => {
        res.set({ 'Content-Type': 'application/json' })
        resp.pipe(res)
      })

      request.write(postData)
      request.end()
    }
  }
}
