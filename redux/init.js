import { rootReducer } from 'fast-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools'
import withRedux from 'next-redux-wrapper'

const clientLogger = store => next => action => {
  let result
  console.groupCollapsed('dispatching', action.type)
  console.log('prev state', store.getState())
  console.log('action', action)
  result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

const serverLogger = store => next => action => {
  console.log(`dispatching server action ${action.type}...`)
  return next(action)
}

const middleWare = server => [
  thunk,
  (server) ? serverLogger : clientLogger
]

export const initStore = (initialState = {}, c) => {
  const { isServer } = c

  return createStore(rootReducer, initialState,
    composeWithDevTools(applyMiddleware(...middleWare(isServer))))
}

export const reduxPage = (comp) => withRedux(initStore)(comp)
