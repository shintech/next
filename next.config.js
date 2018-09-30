const username = process.env['USERNAME']
const password = process.env['PASSWORD']
const hostname = process.env['HOSTNAME'] || 'localhost:8000'

const auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64')

module.exports = (phase, { defaultConfig }) => {
  return {
    serverRuntimeConfig: {
      hostname
    },

    publicRuntimeConfig: {
      auth,
      hostname
    },

    webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
      config.module.rules.push({
        test: /\.js$/,
        enforce: 'pre',
        exclude: [/node_modules/, '/.next'],
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
          failOnWarning: false,
          failOnError: false
        }
      })

      return config
    }
  }
}
