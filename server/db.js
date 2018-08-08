const promise = require('bluebird')
const pg = require('pg-promise')
const chalk = require('chalk')

module.exports = ({ logger }) => {
  let environment = process.env['NODE_ENV']

  let postgresURI = process.env['DATABASE_URL'] || `postgres://postgres:postgres@localhost:5432/api_${environment}`

  const pgp = pg({
    promiseLib: promise
  })

  const connectionString = postgresURI
  const init = pgp(connectionString)
  const databaseName = connectionString.split('/')

  if (environment === 'development') {
    logger.info(`Connected to database: ${chalk.bgBlack.green(databaseName[databaseName.length - 1])}`)
  }

  return init
}
