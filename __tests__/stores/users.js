/* eslint-env jest */

import { fetchUsers, login } from '../../redux/stores/users'
import { initStore } from '../../redux/init'
import { users as api } from '../../api'
import nock from 'nock'

console.log = jest.fn()

const store = initStore({}, {
  isServer: true
})

let loginResponse = (e, q) => {
  if (!q.username || q.username === '') { return { authorized: false } }
  const authorized = (q.password === 'password')

  return {
    authorized
  }
}

nock('https://shintech.ninja')
  .get('/api/users')
  .reply(200, _usersMock)

  .get('/api/users/1')
  .reply(200, _usersMock[0])

  .post('/api/users/login')
  .times(3)
  .reply(200, loginResponse)

describe('Users...', () => {
  beforeAll(async () => {
    let data = await api.getUsers('shintech.ninja')
    let json = await data.json()

    store.dispatch(fetchUsers(json))
  })

  it('expect users length to be greater than 0...', () => {
    expect(store.getState().users.data.length).toEqual(_usersMock.length)
  })

  it('expect users[0] to have _id...', () => {
    expect(store.getState().users.data[0]._id).toEqual(_usersMock[0]._id)
  })

  it('expect users[:id] to have username...', () => {
    expect(store.getState().users.data[0].username).toEqual(_usersMock[0].username)
  })

  it('expect users[:id] to have first_name...', () => {
    expect(store.getState().users.data[0].first_name).toEqual(_usersMock[0].first_name)
  })

  it('expect users[:id] to have last_name...', () => {
    expect(store.getState().users.data[0].last_name).toEqual(_usersMock[0].last_name)
  })

  it('expect users[:id] to have email...', () => {
    expect(store.getState().users.data[0].email).toEqual(_usersMock[0].email)
  })
})

describe('Login success...', () => {
  beforeAll(async () => {
    let data = await api.login('username', 'password', 'shintech.ninja')
    let json = await data.json()

    await store.dispatch(login(json))
  })

  it('expect authorized to be true...', () => {
    expect(store.getState().users.data.authorized).toBeTruthy()
  })
})

describe('Login failure - incorrect password...', () => {
  beforeAll(async () => {
    let data = await api.login('username', 'fail', 'shintech.ninja')
    let json = await data.json()

    await store.dispatch(login(json))
  })

  it('expect authorized to be false...', () => {
    expect(store.getState().users.data.authorized).toBeFalsy()
  })
})

describe('Login failure - no username provided...', () => {
  beforeAll(async () => {
    let data = await api.login('', 'password', 'shintech.ninja')
    let json = await data.json()

    await store.dispatch(login(json))
  })

  it('expect authorized to be false...', () => {
    expect(store.getState().users.data.authorized).toBeFalsy()
  })
})
