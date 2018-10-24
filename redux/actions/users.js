import C from '../../redux/constants'

export function fetchUsers (users) {
  return async dispatch => {
    await dispatch({
      type: C.FETCH_USERS,
      payload: users
    })
  }
}
