/* eslint-env jest */

import deepFreeze from 'deep-freeze'
import reducer from '../reducers/inventory'
import C from '../constants'

console.log = jest.fn()

describe('REDUCER -> INVENTORY -> FETCH_DEVICES...', () => {
  const state = {
    loading: true,
    error: false
  }

  const action = {
    type: C.FETCH_DEVICES,
    payload: _devicesMock
  }

  deepFreeze(action)
  deepFreeze(state)

  const results = reducer(state, action)

  it('expect results to have property hits...', () => {
    expect(results.devices).toHaveProperty('hits')
  })

  it('expect results.data.hits.length to be greater than 0...', () => {
    expect(results.devices.hits.hits.length).toBeGreaterThan(0)
  })
})

describe('REDUCER -> INVENTORY -> SEARCH_INVENTORY...', () => {
  const state = {
    loading: true,
    error: false
  }

  const action = {
    type: C.SEARCH_INVENTORY,
    payload: _devicesMock
  }

  deepFreeze(action)
  deepFreeze(state)

  const results = reducer(state, action)

  it('expect results to have property hits...', () => {
    expect(results.devices).toHaveProperty('hits')
  })

  it('expect results.data.hits.length to be greater than 0...', () => {
    expect(results.devices.hits.hits.length).toBeGreaterThan(0)
  })
})
