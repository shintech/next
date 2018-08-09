const _read = require('./read')
const _create = require('./create')

module.exports = function (options) {
  return {
    fatchAll: _read(options).fatchAll,
    fetchOne: _read(options).fetchOne,
    createTask: _create(options)
  }
}
