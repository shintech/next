import C from '../../redux/constants'

export function fetchUsers (users) {
  return {
    type: C.FETCH_USERS,
    payload: users
  }
}
