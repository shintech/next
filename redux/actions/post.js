import C from '..//constants'

export function fetchPost (post) {
  return async dispatch => {
    await dispatch({
      type: C.FETCH_POST,
      payload: post
    })
  }
}
