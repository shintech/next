/*  /reducers/posts.js
*/
import C from '../store/constants'

const posts = (state = {}, action) => {
  switch (action.type) {
    case C.FETCH_POSTS_SUCCESS:
      return {
        posts: action.payload,
        loading: false,
        error: null
      }

    case C.FETCH_POSTS_ERROR:
      return {
        data: action.payload,
        loading: false,
        error: true
      }

    case C.FETCH_POST:
      return {
        loading: false,
        data: action.payload
      }

    case C.ADD_POST:
      return {
        payload: 'success',
        loading: false
      }

    default:
      return state
  }
}

export default posts
