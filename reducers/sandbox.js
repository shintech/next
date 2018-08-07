import C from '../store/constants'

const about = (state = {}, action) => {
  switch (action.type) {
    case C.INCREMENT:
      let value = state.value + 1

      return {
        value: value
      }

    case C.FETCH_GRAPH:
      return state

    default:
      return state
  }
}

export default about
