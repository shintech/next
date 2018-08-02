import C from '../store/constants'
import { getPosts, getPost } from '../api/posts'

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

function fetchPost (id) {
  return async dispatch => {
    const res = await getPost(id)
    const json = await res.json()

    dispatch({
      type: C.FETCH_POST,
      payload: json
    })
  }
}

export default {
  fetchPosts,
  fetchPost
}
