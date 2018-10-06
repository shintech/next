const next = require('next')
const nextRoutes = require('./routes')
const environment = process.env['NODE_ENV']
const port = process.env['PORT'] || 8000
const host = process.env['HOST'] || 'localhost'
const logger = require('./server/logger')({ environment })
const server = require('./server')({ logger, environment, port })
const pkg = require('./package.json')

const dev = environment === 'development'
const app = next({ dev })

const handler = nextRoutes.getRequestHandler(app)

app.prepare()
  .then(() => {
    server.use(handler)
    server.listen(port, host, () => {
      logger.info(`${pkg.name} - version: ${pkg.version} - listening at ${host}:${port}...`)
    })
  })
