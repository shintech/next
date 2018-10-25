import C from '../../redux/constants'

export function fetchUsers (users) {
  return async dispatch => {
    await dispatch({
      type: C.FETCH_USERS,
      payload: users
    })
  }
}

export function login (authorized) {
  return async dispatch => {
    await dispatch({
      type: C.AUTHORIZE,
      payload: authorized
    })
  }
}
