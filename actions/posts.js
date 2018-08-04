import C from '../store/constants'
import { getPosts, getPost, addPost } from '../api/posts'

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

function add (post) {
  return async dispatch => {
    let payload

    try {
      let result = await addPost(post)
      payload = await result.json()
    } catch (err) {
      throw new Error(err.message)
    }

    dispatch({
      type: C.ADD_POST,
      payload
    })
  }
}

export default {
  fetchPosts,
  fetchPost,
  add
}
