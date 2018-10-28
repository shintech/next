const http = require('http')

module.exports = function ({ usersURL }) {
  return {
    addOne: async function (req, res) {
      const { logger } = req

      let options = {
        method: 'POST',
        hostname: usersURL.hostname,
        port: usersURL.port,
        path: '/api/users',
        headers: { 'Content-Type': 'application/json' }
      }

      let request = http.request(options, resp => {
        res.set({
          'Content-Type': 'application/json'
        })

        resp.pipe(res)
      })

      request.on('error', (err) => {
        logger.error(err.message)
      })

      request.write(JSON.stringify(req.body))
      request.end()
    }
  }
}
