import C from '../../redux/constants'

export function fetchPost (post) {
  return {
    type: C.FETCH_POST,
    payload: post
  }
}
