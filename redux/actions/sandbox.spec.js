/* eslint-env jest */

import { initStore } from '../../redux/init'
import { increment, changeMenuValue } from '../../redux/actions/sandbox'

console.log = jest.fn()

const store = initStore({}, {
  isServer: true
})

describe('ACTION -> SANDBOX -> increment()...', () => {
  beforeAll(() => {
    store.dispatch(increment(1))
  })

  it('expect sandbox.value to equal 1...', () => {
    expect(store.getState().sandbox.value).toEqual(1)
  })
})

describe('ACTION -> SANDBOX -> changeMenuValue()...', () => {
  beforeAll(() => {
    store.dispatch(changeMenuValue(2))
  })

  it('expect sandbox.menu to equal 2...', () => {
    expect(store.getState().sandbox.menu).toEqual(2)
  })
})
