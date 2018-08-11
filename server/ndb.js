const { connect } = require('camo')

module.exports = function ({ logger }) {
  var database

  var uri = 'nedb://./server/data/'

  connect(uri).then(function (db) {
    database = db

    logger.info(`connected to NeDB database ${db._path}`)
  })

  return database
}
