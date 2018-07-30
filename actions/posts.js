import C from '../store/constants'
import { getPosts } from '../api/posts'

function fetchPosts () {
  return async dispatch => {
    const res = await getPosts()
    const json = await res.json()

    dispatch({
      type: C.FETCH_POSTS,
      payload: json
    })
  }
}

export default {
  fetchPosts
}
