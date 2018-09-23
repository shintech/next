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
    }
  }
}
