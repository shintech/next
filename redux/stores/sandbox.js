import {namespaceConfig} from 'fast-redux'

const DEFAULT_STATE = {
  value: 0,
  menu: 'hidden',
  menuData: [1, 2, 3, 4]
}

const {actionCreator, getState: getPageState} = namespaceConfig('sandbox', DEFAULT_STATE)

const bumpIncrement = actionCreator(function bumpIncrement (state, increment) {
  return { ...state, value: state.value + increment }
})

const changeMenu = actionCreator(function changeMenu (state, menu) {
  return { ...state, menu: menu }
})

const sendFileAction = actionCreator(function sendFileAction (state) {
  return { ...state }
})

export {
  getPageState, bumpIncrement, changeMenu, sendFileAction
}
