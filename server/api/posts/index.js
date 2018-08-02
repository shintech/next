const _read = require('./read')

module.exports = function (options) {
  return {
    fatchAll: _read(options).fatchAll,
    fetchOne: _read(options).fetchOne
  }
}
