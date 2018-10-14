/* eslint-env jest */

import { initStore } from '../../redux/init'
import { fetchUsers } from '../../redux/actions/users'

console.log = jest.fn()

const store = initStore({}, {
  isServer: true
})

describe('REDUX -> ACTION -> fetchUsers()...', () => {
  beforeAll(() => {
    store.dispatch(fetchUsers(_usersMock))
  })

  it('expect users.data.length to be greater than 0...', () => {
    expect(store.getState().users.data.length).toBeGreaterThan(0)
  })

  it('expect users.data[0] to have property first_name...', () => {
    expect(store.getState().users.data[0]).toHaveProperty('first_name')
  })

  it('expect users.data[0] to have property last_name...', () => {
    expect(store.getState().users.data[0]).toHaveProperty('last_name')
  })

  it('expect users.data[0] to have property email...', () => {
    expect(store.getState().users.data[0]).toHaveProperty('email')
  })

  it('expect users.data[0] to have property username...', () => {
    expect(store.getState().users.data[0]).toHaveProperty('username')
  })

  it('expect users.data[0] to have property password...', () => {
    expect(store.getState().users.data[0]).toHaveProperty('password')
  })
})
