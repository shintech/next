/* eslint-env jest */

import nock from 'nock'
import request from 'supertest'

console.log = jest.fn()

let loginResponse = (e, q) => {
  if (!q.username || q.username === '') { return { authorized: false } }
  const authorized = (q.password === '$2a$10$z0yU2Lr73m/hz/FcrITgn.9s3vqpXmWJGvyfoG4wupvu03eylINQG')

  return {
    authorized
  }
}

nock(_url.users.href)
  .post('/api/users/login')
  .times(3)
  .reply(200, loginResponse)

describe('SERVER -> USERS -> api.login() - expect successful login...', () => {
  let res

  beforeAll(async () => {
    res = await request(_server).post('/api/users/login')
      .send({ username: 'username', password: '$2a$10$z0yU2Lr73m/hz/FcrITgn.9s3vqpXmWJGvyfoG4wupvu03eylINQG' })
  })

  it('expect res.body to have property authorized...', async () => {
    expect(res.body).toHaveProperty('authorized')
  })

  it('expect res.body.authorized to be true', () => {
    expect(res.body.authorized).toBeTruthy()
  })
})

describe('SERVER -> USERS -> api.login() - expect login failure with incorrect password...', () => {
  let res

  beforeAll(async () => {
    res = await request(_server).post('/api/users/login')
      .send({ username: 'username', password: 'fail' })
  })

  it('expect res.body to have property authorized...', async () => {
    expect(res.body).toHaveProperty('authorized')
  })

  it('expect res.body.authorized to be false', () => {
    expect(res.body.authorized).toBeFalsy()
  })
})

describe('SERVER -> USERS -> api.login() - expect login failure no username...', () => {
  let res

  beforeAll(async () => {
    res = await request(_server).post('/api/users/login')
      .send({ username: '', password: '$2a$10$z0yU2Lr73m/hz/FcrITgn.9s3vqpXmWJGvyfoG4wupvu03eylINQG' })
  })

  it('expect res.body to have property authorized...', async () => {
    expect(res.body).toHaveProperty('authorized')
  })

  it('expect res.body.authorized to be false', () => {
    expect(res.body.authorized).toBeFalsy()
  })
})
