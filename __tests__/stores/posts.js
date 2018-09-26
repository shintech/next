/* eslint-env jest */

import { fetchPosts } from '../../redux/stores/posts'
import { initStore } from '../../redux/init'
import { posts as api } from '../../api'
import nock from 'nock'

console.log = jest.fn()

const store = initStore({}, {
  isServer: true
})

nock('https://shintech.ninja')
  .get('/api/posts')
  .reply(200, _posts)

describe('fetchPosts...', () => {
  beforeAll(async () => {
    let data = await api.getPosts('shintech.ninja')
    let json = await data.json()

    store.dispatch(fetchPosts(json))
  })

  it('expect posts length to be greater than 0...', () => {
    expect(store.getState().posts.data.length).toBeGreaterThan(0)
  })

  it('expect post[0] to have _id...', () => {
    expect(store.getState().posts.data[0]._id).toEqual(_posts[0]._id)
  })

  it('expect post[0] to have title...', () => {
    expect(store.getState().posts.data[0].title).toEqual(_posts[0].title)
  })

  it('expect post[0] to have body...', () => {
    expect(store.getState().posts.data[0].body).toEqual(_posts[0].body)
  })

  it('expect post[0] to have summary...', () => {
    expect(store.getState().posts.data[0].summary).toEqual(_posts[0].summary)
  })
})
