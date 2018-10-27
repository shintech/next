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

describe('REDUX -> REDUCER -> AUTHORIZE - success...', () => {
  const state = {
    error: false,
    loading: false,
    token: false
  }

  const action = {
    type: C.AUTHORIZE,
    payload: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NDA2MTExMTgsImV4cCI6MTU0MDY5NzUxOH0.OVgzl7iQL_tF48D2QGXl0h2sj2b9JtyS7cPoXxZIAXU'
  }

  deepFreeze(action)
  deepFreeze(state)

  const results = reducer(state, action)

  it('expect result.token to be equal "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NDA2MTExMTgsImV4cCI6MTU0MDY5NzUxOH0.OVgzl7iQL_tF48D2QGXl0h2sj2b9JtyS7cPoXxZIAXU"...', () => {
    expect(results.token).toEqual('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NDA2MTExMTgsImV4cCI6MTU0MDY5NzUxOH0.OVgzl7iQL_tF48D2QGXl0h2sj2b9JtyS7cPoXxZIAXU')
  })
})

describe('REDUX -> REDUCER -> AUTHORIZE - failure...', () => {
  const state = {
    error: false,
    loading: false,
    token: false
  }

  const action = {
    type: C.AUTHORIZE,
    payload: false
  }

  deepFreeze(action)
  deepFreeze(state)

  const results = reducer(state, action)

  it('expect result.token to be falsy with incorrect password...', () => {
    expect(results.token).toBeFalsy()
  })
})

describe('REDUX -> REDUCER -> AUTHORIZE - failure...', () => {
  const state = {
    error: false,
    loading: false,
    token: false
  }

  const action = {
    type: C.AUTHORIZE,
    payload: false
  }

  deepFreeze(action)
  deepFreeze(state)

  const results = reducer(state, action)

  it('expect result.token to be falsy with incorrect username...', () => {
    expect(results.token).toBeFalsy()
  })
})
