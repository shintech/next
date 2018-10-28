const express = require('express')
const bodyParser = require('body-parser')
const { URL } = require('url')
const path = require('path')
const compression = require('compression')
const Router = require('./router')

const server = express()

const postsURL = new URL(process.env['POSTS_URL'])
const usersURL = new URL(process.env['USERS_URL'])
const devicesURL = new URL(process.env['DEVICES_URL'])

module.exports = ({ logger, port, environment }) => {
  const api = Router({ postsURL, usersURL, devicesURL })

  server.use('/public', express.static(path.join(__dirname, '../public')))
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use(compression())

    .use('/api', (req, res, next) => {
      res.on('finish', () => {
        logger.info(`${res.statusCode} - ${req.method} - ${req.url}`)
      })

      req.logger = logger
      next()
    })

    .use('/api', api)

  return server
}
