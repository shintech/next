const next = require('next')
const nextRoutes = require('./routes')
const environment = process.env['NODE_ENV']
const port = process.env['PORT'] || 8000
const logger = require('./server/logger')({ environment })
const server = require('./server')({ logger, environment, port })

const dev = environment === 'development'
const app = next({ dev })

const handler = nextRoutes.getRequestHandler(app)

app.prepare()
  .then(() => {
    server.use(handler)
    server.listen(port, () => {
      logger.info(`listening on port ${port}...`)
    })
  })
