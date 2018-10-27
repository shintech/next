import C from '../constants'

const initialState = {
  error: false,
  loading: true,
  token: false
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case C.FETCH_USERS:
      return { ...state, data: action.payload, loading: false, error: false }

    case C.AUTHORIZE:
      return { ...state, token: action.payload }

    default:
      return state
  }
}

export default users
