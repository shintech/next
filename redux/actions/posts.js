import C from '../../redux/constants'

export function fetchPosts (posts) {
  return async dispatch => {
    await dispatch({
      type: C.FETCH_POSTS,
      payload: posts
    })
  }
}
