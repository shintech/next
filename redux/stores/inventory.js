import { namespaceConfig } from 'fast-redux'

const DEFAULT_STATE = { devices: [], loading: true }

const { actionCreator, getState: getInventoryPageState } = namespaceConfig('devices', DEFAULT_STATE)

const fetchDevices = actionCreator(function fetchDevices (state, json) {
  return { ...state, devices: json, loading: false }
})

const searchInventory = actionCreator(function searchInventory (state, devices) {
  return { ...state, devices: devices, loading: false }
})

export {
  getInventoryPageState, fetchDevices, searchInventory
}
