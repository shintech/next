import C from '../constants'

const inventory = (state = {}, action) => {
  switch (action.type) {
    case C.FETCH_DEVICES:
      return { ...state, devices: action.payload, loading: false, error: false }

    case C.SEARCH_INVENTORY:
      return { ...state, devices: action.payload }
    default:
      return state
  }
}

export default inventory
