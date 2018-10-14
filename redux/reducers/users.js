import C from '../constants'

const initialState = {
  error: false,
  loading: true
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case C.FETCH_USERS:
      return { ...state, data: action.payload, loading: false, error: false }

    default:
      return state
  }
}

export default users
