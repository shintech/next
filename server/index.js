const express = require('express')
const bodyParser = require('body-parser')
const next = require('next')
const path = require('path')
const compression = require('compression')
const morgan = require('morgan')
const getNdb = require('./ndb')
const nextRoutes = require('../routes')
const getRouter = require('./router')

const environment = process.env['NODE_ENV']
const port = process.env['PORT'] || 8000

const logger = require('./logger')({ environment })

const dev = environment === 'development'
const app = next({ dev })

const handler = nextRoutes.getRequestHandler(app)

app.prepare()
  .then(() => {
    const server = express()
    const ndb = getNdb({ logger })

    const api = getRouter({ ndb, logger })

    if (environment === 'development') server.use(morgan('dev'))

    server.use('/public', express.static(path.join(__dirname, '../public')))
      .use(bodyParser.urlencoded({ extended: true }))
      .use(bodyParser.json())
      .use(compression())
      .use('/api', api)

      .use(handler)

      .listen(port)

      .on('listening', () => {
        logger.info(`listening on port ${port}...`)
      })

      .on('error', (err) => {
        throw (err)
      })
  })
