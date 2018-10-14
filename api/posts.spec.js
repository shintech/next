/* eslint-env jest */

import { posts as api } from './'
import nock from 'nock'

console.log = jest.fn()

nock('https://shintech.ninja')
  .get('/api/posts')
  .reply(200, _postsMock)

  .get('/api/posts/5b9eeda95744c570b3689035')
  .reply(200, _postsMock[0])

describe('API -> POSTS -> api.getPosts()...', () => {
  let json

  beforeAll(async () => {
    let data = await api.getPosts('shintech.ninja')
    json = await data.json()
  })

  it('expect posts to have length greater than 0...', () => {
    expect(json.length).toBeGreaterThan(0)
  })

  it('expect posts to have property id...', () => {
    expect(json[0]).toHaveProperty('_id')
  })

  it('expect post.id to equal mock.id...', () => {
    expect(json[0]._id).toEqual(_postsMock[0]._id)
  })
})

describe('API -> POSTS -> api.getPost()...', () => {
  let json

  beforeAll(async () => {
    let data = await api.getPost('5b9eeda95744c570b3689035', 'shintech.ninja')
    json = await data.json()
  })

  it('expect posts to have property id...', () => {
    expect(json).toHaveProperty('_id')
  })

  it('expect post.id to equal mock.id...', () => {
    expect(json._id).toEqual(_postsMock[0]._id)
  })

  it('expect posts to have property title...', () => {
    expect(json).toHaveProperty('title')
  })

  it('expect post.title to equal mock.title...', () => {
    expect(json.title).toEqual(_postsMock[0].title)
  })

  it('expect posts to have property body...', () => {
    expect(json).toHaveProperty('body')
  })

  it('expect post.body to equal mock.body...', () => {
    expect(json.body).toEqual(_postsMock[0].body)
  })

  it('expect posts to have property summary...', () => {
    expect(json).toHaveProperty('summary')
  })

  it('expect post.summary to equal mock.summary...', () => {
    expect(json.body).toEqual(_postsMock[0].body)
  })
})
