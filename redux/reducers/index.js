import { combineReducers } from 'redux'
import sandbox from './sandbox'
import posts from './posts'
import about from './about'
import modal from './modal'
import device from './device'

export default combineReducers({
  sandbox,
  posts,
  about,
  modal,
  device
})
