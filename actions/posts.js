/*  /actions/post.js
*/
import C from '../store/constants'
import { posts as api } from '../api'

function fetchPostsSuccess (posts) {
  return {
    type: C.FETCH_POSTS_SUCCESS,
    payload: posts,
    loading: false
  }
}

function fetchPostsError (error) {
  return {
    type: C.FETCH_POSTS_ERROR,
    payload: error,
    loading: false
  }
}

export default {
  fetchPosts: function () {
    return async dispatch => {
      let response

      try {
        let res = await api.getPosts()
        let json = await res.json()

        response = fetchPostsSuccess(json)
      } catch (err) {
        response = fetchPostsError(err)
      }

      dispatch(response)
    }
  },

  fetchPost: function (id) {
    return async dispatch => {
      const res = await api.getPost(id)
      const json = await res.json()

      dispatch({
        type: C.FETCH_POST,
        payload: json
      })
    }
  },

  addPost: function (post) {
    return async dispatch => {
      let payload

      try {
        let result = await api.addPost(post)
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
}
