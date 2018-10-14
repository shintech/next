import C from '../../redux/constants'

export function increment (value) {
  return {
    type: C.INCREMENT,
    payload: value
  }
}

export function changeMenuValue (menu) {
  return {
    type: C.CHANGE_MENU_VALUE,
    payload: menu
  }
}
