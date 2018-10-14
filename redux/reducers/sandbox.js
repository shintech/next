import C from '../constants'

const initialState = {
  value: 0,
  menu: 0,
  menuData: [1, 2, 3, 4]
}

const sandbox = (state = initialState, action) => {
  switch (action.type) {
    case C.INCREMENT:
      return { ...state, value: state.value + action.payload }

    case C.CHANGE_MENU_VALUE:
      return { ...state, menu: action.payload }

    default:
      return state
  }
}

export default sandbox
