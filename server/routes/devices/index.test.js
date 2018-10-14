/* eslint-env jest */

import nock from 'nock'
import request from 'supertest'

console.log = jest.fn()

nock(_url.devices.href)
  .get('/api/inventory')
  .reply(200, _devicesMock)

  .get(`/api/search`)

  .query({
    slug: _devicesMock.hits.hits[0]._id
  })

  .reply(200, _devicesMock)

describe('SERVER -> GET /api/inventory -> api.fetchAll()..', () => {
  let res

  beforeAll(async () => {
    res = await request(_server).get('/api/inventory')
  })

  it('expect res.body to have property hits...', () => {
    expect(res.body).toHaveProperty('hits')
  })

  it('expect res.body.hits to be greater than 0...', () => {
    expect(res.body.hits.hits.length).toBeGreaterThan(0)
  })
})

describe('SERVER -> GET /api/search -> api.fetchAll()..', () => {
  let res

  beforeAll(async () => {
    res = await request(_server).get(`/api/search`).query({ slug: _devicesMock.hits.hits[0]._id })
  })

  it('expect res.body to have property hits...', () => {
    expect(res.body).toHaveProperty('hits')
  })

  it('expect res.body.hits to be greater than 0...', () => {
    expect(res.body.hits.hits.length).toBeGreaterThan(0)
  })
})
