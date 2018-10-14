import C from '../../redux/constants'

export function fetchPosts (posts) {
  return {
    type: C.FETCH_POSTS,
    payload: posts
  }
}
