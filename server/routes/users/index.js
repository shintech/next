const _read = require('./read')
const _create = require('./create')
const _auth = require('./auth')

module.exports = function (options) {
  return {
    fatchAll: _read(options).fatchAll,
    fetchOne: _read(options).fetchOne,
    addOne: _create(options).addOne,
    login: _auth(options).login
  }
}
