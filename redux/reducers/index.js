import { combineReducers } from 'redux'
import posts from './posts'
import post from './post'
import users from './users'
import sandbox from './sandbox'
import inventory from './inventory'

export default combineReducers({
  posts,
  post,
  users,
  sandbox,
  inventory
})
