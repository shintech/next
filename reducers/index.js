import { combineReducers } from 'redux'
import sandbox from './sandbox'
import posts from './posts'

export default combineReducers({
  sandbox,
  posts
})
