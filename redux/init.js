let { reduxPage, initStore } = (process.env.NODE_ENV === 'development') ? require('./store/development') : require('./store/production')

export {
  reduxPage,
  initStore
}
