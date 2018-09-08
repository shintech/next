/*  /reducers/about.js
*/
import C from '../store/constants'

const about = (state = {}, action) => {
  switch (action.type) {
    case C.FETCH_TASKS:
      return {
        loading: false,
        data: action.payload
      }

    case C.FETCH_TASK:
      return {
        loading: false,
        data: action.payload
      }

    case C.ADD_TASK:
      return {
        payload: 'success',
        loading: false
      }

    default:
      return state
  }
}

export default about
