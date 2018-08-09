import C from '../store/constants'
import { posts as api } from '../api'

export default {
  fetchPosts: function () {
    return async dispatch => {
      const res = await api.getPosts()
      const json = await res.json()

      dispatch({
        type: C.FETCH_POSTS,
        payload: json
      })
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
