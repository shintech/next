import C from '../../redux/constants'

export function fetchAll (devices) {
  return {
    type: C.FETCH_DEVICES,
    payload: devices
  }
}

export function searchInventory (devices) {
  return {
    type: C.SEARCH_INVENTORY,
    payload: devices
  }
}
