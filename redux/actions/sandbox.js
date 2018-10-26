import C from '../constants'

export function increment (value) {
  return async dispatch => {
    await dispatch({
      type: C.INCREMENT,
      payload: value
    })
  }
}

export function changeMenuValue (menu) {
  return async dispatch => {
    await dispatch({
      type: C.CHANGE_MENU_VALUE,
      payload: menu
    })
  }
}
