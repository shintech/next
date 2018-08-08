const express = require('express')
const bodyParser = require('body-parser')
const next = require('next')
const path = require('path')
const compression = require('compression')
const favicon = require('serve-favicon')
const morgan = require('morgan')
const winston = require('winston')
const configDB = require('./db')
const routes = require('../routes')
const getRouter = require('./router')

const environment = process.env['NODE_ENV']
const port = process.env['PORT'] || 8000

const dev = environment !== 'production'

const app = next({ dev })

const handle = app.getRequestHandler()
const handler = routes.getRequestHandler(app)

const fileAssets = express.static(
  path.join(__dirname, '../public')
)

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
})

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }))
}

app.prepare()
  .then(() => {
    const server = express()
    const db = configDB({ logger })
    const api = getRouter({ db, logger })

    if (environment !== 'test') {
      server.use(morgan((environment === 'development') ? 'dev' : 'common'))
    }

    server.use(fileAssets)
      .use(favicon(path.join('public', 'images', 'favicon.png')))
      .use(bodyParser.urlencoded({ extended: true }))
      .use(bodyParser.json())
      .use(compression())
      .use('/api', api)
      .use(handler)

      .get('/', (req, res) => {
        return handle(req, res)
      })

      .listen(8000, (err) => {
        if (err) throw err
        logger.info(`listening on port ${port}...`)
      })
  })
