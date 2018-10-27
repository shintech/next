/* eslint-env jest */

import deepFreeze from 'deep-freeze'
import reducer from '../reducers/sandbox'
import C from '../constants'

console.log = jest.fn()

describe('REDUCER -> SANDBOX - INCREMENT...', () => {
  const state = {
    value: 0,
    menu: 'hidden',
    menuData: [1, 2, 3, 4]
  }

  const action = {
    type: C.INCREMENT,
    payload: 1
  }

  deepFreeze(action)
  deepFreeze(state)

  const results = reducer(state, action)

  it('expect value to have been incremented by the value in action.payload...', () => {
    expect(results.value).toEqual(state.value + action.payload)
  })
})

describe('REDUCER -> SANDBOX - CHANGE_MENU_VALUE...', () => {
  const state = {
    value: 0,
    menu: 'hidden',
    menuData: [1, 2, 3, 4]
  }

  const action = {
    type: C.CHANGE_MENU_VALUE,
    payload: 2
  }

  deepFreeze(action)
  deepFreeze(state)

  const results = reducer(state, action)

  it('expect menu to equal action.payload...', () => {
    expect(results.menu).toEqual(action.payload)
  })
})
