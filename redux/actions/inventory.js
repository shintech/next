import C from '../../redux/constants'

export function fetchAll (devices) {
  return async dispatch => {
    await dispatch({
      type: C.FETCH_DEVICES,
      payload: devices
    })
  }
}

export function searchInventory (devices) {
  return async dispatch => {
    await dispatch({
      type: C.SEARCH_INVENTORY,
      payload: devices
    })
  }
}
