import { combineReducers } from 'redux'
import sandbox from './sandbox'
import posts from './posts'
import modal from './modal'
import inventory from './inventory'

export default combineReducers({
  sandbox,
  posts,
  modal,
  inventory
})
