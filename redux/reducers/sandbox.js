/*  /reducers/sandbox.js
*/
import C from '../store/constants'

const about = (state = {}, action) => {
  switch (action.type) {
    case C.INCREMENT:
      let value = state.value + 1

      return {
        ...state,
        value: value
      }

    case C.CHANGE_MENU:
      return {
        ...state,
        menu: action.payload
      }

    case C.FETCH_GRAPH:
      return state

    default:
      return state
  }
}

export default about
