/* eslint-env jest */

import { initStore } from '../../redux/init'
import { fetchUsers, authorize } from '../actions/users'

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

describe('REDUX -> ACTION -> authorize() -- success...', () => {
  beforeAll(() => {
    store.dispatch(authorize('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NDA2MTExMTgsImV4cCI6MTU0MDY5NzUxOH0.OVgzl7iQL_tF48D2QGXl0h2sj2b9JtyS7cPoXxZIAXU'))
  })

  it('expect users to have property token...', () => {
    expect(store.getState().users).toHaveProperty('token')
  })

  it('expect expect users.token to be true...', () => {
    expect(store.getState().users.token).toEqual('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NDA2MTExMTgsImV4cCI6MTU0MDY5NzUxOH0.OVgzl7iQL_tF48D2QGXl0h2sj2b9JtyS7cPoXxZIAXU')
  })
})

describe('REDUX -> ACTION -> authorize() -- failure...', () => {
  beforeAll(() => {
    store.dispatch(authorize(false))
  })

  it('expect users to have property token...', () => {
    expect(store.getState().users).toHaveProperty('token')
  })

  it('expect expect users.token to be false...', () => {
    expect(store.getState().users.token).toBeFalsy()
  })
})

describe('REDUX -> ACTION -> authorize() -- failure...', () => {
  beforeAll(() => {
    store.dispatch(authorize(false))
  })

  it('expect users to have property token...', () => {
    expect(store.getState().users).toHaveProperty('token')
  })

  it('expect expect users.token to be false...', () => {
    expect(store.getState().users.token).toBeFalsy()
  })
})
