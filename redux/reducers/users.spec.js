/* eslint-env jest */

import deepFreeze from 'deep-freeze'
import reducer from '../../redux/reducers/users'
import C from '../../redux/constants'

console.log = jest.fn()

describe('REDUX -> REDUCER -> FETCH_USERS...', () => {
  const state = {
    error: false,
    loading: false
  }

  const action = {
    type: C.FETCH_USERS,
    payload: _usersMock
  }

  deepFreeze(action)
  deepFreeze(state)

  const results = reducer(state, action)

  it('expect result to equal action.payload...', () => {
    expect(results).toEqual({ ...state, data: action.payload })
  })
})
