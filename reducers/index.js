import { combineReducers } from 'redux'
import sandbox from './sandbox'
import posts from './posts'
import about from './about'

export default combineReducers({
  sandbox,
  posts,
  about
})
