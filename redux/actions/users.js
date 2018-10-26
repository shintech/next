import C from '../constants'

export function fetchUsers (users) {
  return async dispatch => {
    await dispatch({
      type: C.FETCH_USERS,
      payload: users
    })
  }
}

export function authorize (auth, host) {
  return {
    type: C.AUTHORIZE,
    payload: auth
  }
}
