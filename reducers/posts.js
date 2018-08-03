import C from '../store/constants'

const posts = (state = {}, action) => {
  switch (action.type) {
    case C.FETCH_POSTS:
      return {
        loading: false,
        data: action.payload
      }

    case C.FETCH_POST:
      return {
        loading: false,
        data: action.payload
      }

    default:
      return state
  }
}

export default posts
