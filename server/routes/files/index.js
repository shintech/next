const _create = require('./create')

module.exports = function (options) {
  return {
    createFile: _create(options)
  }
}