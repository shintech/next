const environment = process.env.NODE_ENV

let { reduxPage, initStore } = (environment === 'development') ? require('./store/development') : require('./store/production')

export {
  reduxPage,
  initStore
}
