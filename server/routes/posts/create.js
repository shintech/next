const http = require('http')

module.exports = function ({ postsURL }) {
  return {
    addOne: async function (req, res) {
      const { logger } = req

      let options = {
        method: 'POST',
        hostname: postsURL.hostname,
        port: postsURL.port,
        path: '/api/posts',
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
