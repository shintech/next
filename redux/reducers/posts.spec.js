/* eslint-env jest */

import deepFreeze from 'deep-freeze'
import reducer from '../reducers/posts'
import C from '../constants'

console.log = jest.fn()

describe('REDUX -> REDUCER -> FETCH_POSTS...', () => {
  const state = {
    error: false,
    loading: false
  }

  const action = {
    type: C.FETCH_POSTS,
    payload: _postsMock
  }

  deepFreeze(action)
  deepFreeze(state)

  const results = reducer(state, action)

  it('expect result to equal action.payload...', () => {
    expect(results).toEqual({ ...state, data: action.payload })
  })
})
