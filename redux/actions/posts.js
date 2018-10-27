import C from '../constants'

export function fetchPosts (posts) {
  return {
    type: C.FETCH_POSTS,
    payload: posts
  }
}
