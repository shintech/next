const http = require('http')
const remote = process.env['POSTGRES_HOST']
const port = process.env['POSTGRES_PORT']

module.exports = function ({ logger }) {
  return {
    addOne: async function (req, res) {
      let options = {
        method: 'POST',
        hostname: remote,
        port: port,
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
