/* eslint-env jest */

import { initStore } from '..//init'
import { fetchAll } from '../actions/inventory'

console.log = jest.fn()

const store = initStore({}, {
  isServer: true
})

describe('ACTION -> INVENTORY -> fetchAll()...', () => {
  beforeAll(() => {
    store.dispatch(fetchAll(_devicesMock))
  })

  it('expect hits.length to be greater than 0...', () => {
    expect(store.getState().inventory.devices.hits.hits.length).toBeGreaterThan(0)
  })
})
