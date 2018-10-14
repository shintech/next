/* eslint-env jest */

import nock from 'nock'
import request from 'supertest'

console.log = jest.fn()

nock(_url.posts.href)
  .get('/api/posts')
  .reply(200, _postsMock)

  .get(`/api/posts/${_postsMock[0]._id}`)
  .reply(200, _postsMock[0])

describe('SERVER -> GET /api/posts -> api.fetchAll()..', () => {
  let res

  beforeAll(async () => {
    res = await request(_server).get('/api/posts')
  })

  it('expect posts.length to be greater than 0...', async () => {
    expect(res.body.length).toBeGreaterThan(0)
  })

  it('expect posts[0] to have property _id...', async () => {
    expect(res.body[0]).toHaveProperty('_id')
  })

  it('expect posts[0]._id to equal mock._id...', async () => {
    expect(res.body[0]._id).toEqual(_postsMock[0]._id)
  })
})

describe('SERVER -> GET /api/posts/:id -> api.fetchOne()..', () => {
  let res

  beforeAll(async () => {
    res = await request(_server).get(`/api/posts/${_postsMock[0]._id}`)
  })

  it('expect posts[0] to have property _id...', async () => {
    expect(res.body).toHaveProperty('_id')
  })

  it('expect posts[0]._id to equal mock._id...', async () => {
    expect(res.body._id).toEqual(_postsMock[0]._id)
  })

  it('expect posts[0] to have property title...', async () => {
    expect(res.body).toHaveProperty('title')
  })

  it('expect posts[0].title to equal mock.title...', async () => {
    expect(res.body.title).toEqual(_postsMock[0].title)
  })

  it('expect posts[0] to have property body...', async () => {
    expect(res.body).toHaveProperty('body')
  })

  it('expect posts[0].body to equal mock.body...', async () => {
    expect(res.body.body).toEqual(_postsMock[0].body)
  })

  it('expect posts[0] to have property summary...', async () => {
    expect(res.body).toHaveProperty('summary')
  })

  it('expect posts[0].summary to equal mock.summary...', async () => {
    expect(res.body.summary).toEqual(_postsMock[0].summary)
  })
})
