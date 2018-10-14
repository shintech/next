const path = require('path')

module.exports = {
  setupFiles: ['<rootDir>/config/jest/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  rootDir: path.join('..', '..')
}
