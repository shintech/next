const express = require('express')
const bodyParser = require('body-parser')
const next = require('next')
const path = require('path')
const compression = require('compression')
const morgan = require('morgan')
const configDB = require('./db')
const getNdb = require('./ndb')
const nextRoutes = require('../routes')
const getRouter = require('./router')

const environment = process.env['NODE_ENV']
const port = process.env['PORT'] || 8000
const host = process.env['HOST'] || 'localhost'

const logger = require('./logger')({ environment })
const dev = environment !== 'production'

const app = next({ dev })

const handler = nextRoutes.getRequestHandler(app)

app.prepare()
  .then(() => {
    const server = express()
    const ndb = getNdb({ logger })
    const db = configDB({ logger })

    const api = getRouter({ db, ndb, logger })

    if (environment === 'development') server.use(morgan('dev'))

    server.use('/public', express.static(path.join(__dirname, '../public')))
      .use(bodyParser.urlencoded({ extended: true }))
      .use(bodyParser.json())
      .use(compression())
      .use('/api', api)
      .use(handler)

      .listen(port, host)

      .on('listening', () => {
        logger.info(`listening on port ${port}...`)
      })

      .on('error', (err) => {
        throw (err)
      })
  })
