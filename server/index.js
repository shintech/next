const express = require('express')
const bodyParser = require('body-parser')
const next = require('next')
const path = require('path')
const compression = require('compression')
const favicon = require('serve-favicon')
const morgan = require('morgan')
const configDB = require('./db')
const routes = require('../routes')
const getRouter = require('./router')
const dev = process.env['NODE_ENV'] !== 'production'
const port = process.env['PORT'] || 8000

const app = next({ dev })

const handle = app.getRequestHandler()
const handler = routes.getRequestHandler(app)

const fileAssets = express.static(
  path.join(__dirname, '../public')
)

app.prepare()
  .then(() => {
    const server = express()
    const db = configDB()
    const api = getRouter({ db })

    server.use(morgan('dev'))
      .use(fileAssets)
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
        console.log(`listening on port ${port}...`)
      })
  })
