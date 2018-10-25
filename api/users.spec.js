/* eslint-env jest */

import { users as api } from './'
import nock from 'nock'

console.log = jest.fn()

nock('https://shintech.ninja')
  .post('/api/users/login')
  .times(3)
  .reply(200, _loginResponse)

describe('API -> USERS -> login success...', () => {
  let json

  beforeAll(async () => {
    let data = await api.login('username', 'password', 'shintech.ninja')
    json = await data.json()
  })

  it('expect login to be successful...', () => {
    expect(json.authorized).toBeTruthy()
  })
})

describe('API -> USERS -> login failure...', () => {
  let json

  beforeAll(async () => {
    let data = await api.login('', 'password', 'shintech.ninja')
    json = await data.json()
  })

  it('expect login to fail with no username provided...', () => {
    expect(json.authorized).toBeFalsy()
  })
})

describe('API -> USERS -> login failure...', () => {
  let json

  beforeAll(async () => {
    let data = await api.login('username', 'fail', 'shintech.ninja')
    json = await data.json()
  })

  it('expect login to fail with incorrect password...', () => {
    expect(json.authorized).toBeFalsy()
  })
})
