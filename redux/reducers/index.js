import { combineReducers } from 'redux'
import sandbox from './sandbox'
import posts from './posts'
import about from './about'
import modal from './modal'

export default combineReducers({
  sandbox,
  posts,
  about,
  modal
})
