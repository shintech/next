/* eslint-env jest */

import nock from 'nock'
import request from 'supertest'

console.log = jest.fn()

nock(_url.posts.href)
  .post('/api/posts')
  .times(1)
  .reply(200, _postsMock[0])

describe('SERVER -> POST /api/posts -> api.addOne()', () => {
  let res

  beforeAll(async () => {
    res = await request(_server).post('/api/posts')
      .send(_postsMock[0])
  })

  it('expect res.status to equal 200...', async () => {
    expect(res.status).toBe(200)
  })

  it('expect res.body to have property _id', () => {
    expect(res.body).toHaveProperty('_id')
  })

  it('expect res.body._id to equal mock._id...', () => {
    expect(res.body._id).toEqual(_postsMock[0]._id)
  })
})
