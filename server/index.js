const express = require('express')
const bodyParser = require('body-parser')
const { URL } = require('url')
const path = require('path')
const compression = require('compression')
const morgan = require('morgan')
const Router = require('./router')

const server = express()

const postsURL = new URL(process.env['POSTS_URL'])
const usersURL = new URL(process.env['USERS_URL'])
const devicesURL = new URL(process.env['DEVICES_URL'])

module.exports = ({ logger, port, environment }) => {
  const api = Router({ postsURL, usersURL, devicesURL, logger })

  if (environment === 'development') server.use(morgan('dev'))

  server.use('/public', express.static(path.join(__dirname, '../public')))
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use(compression())
    .use('/api', api)

  return server
}
