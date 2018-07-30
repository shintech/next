const express = require('express')
const next = require('next')
const routes = require('../routes')
const getRouter = require('./api')

const dev = process.env['NODE_ENV'] !== 'production'
const port = process.env['PORT'] || 8000

const app = next({ dev })

const handle = app.getRequestHandler()
const handler = routes.getRequestHandler(app)

app.prepare()
  .then(() => {
    const server = express()

    let api = getRouter()

    server.use('/api', api)

    server.use(handler)

    server.get('/', (req, res) => {
      return handle(req, res)
    })

    server.listen(8000, (err) => {
      if (err) throw err
      console.log(`listening on port ${port}...`)
    })
  })
