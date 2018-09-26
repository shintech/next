/* eslint-env jest */

import { fetchPost } from '../../redux/stores/post'
import { initStore } from '../../redux/init'
import { posts as api } from '../../api'
import nock from 'nock'

console.log = jest.fn()

const store = initStore({}, {
  isServer: true
})

nock('https://shintech.ninja')
  .get('/api/posts/5b9eeda95744c570b3689035')
  .reply(200, _posts[0])

describe('fetchPost...', () => {
  beforeAll(async () => {
    let data = await api.getPost('5b9eeda95744c570b3689035', 'shintech.ninja')
    let json = await data.json()

    store.dispatch(fetchPost(json))
  })

  it('expect post to have property _id...', () => {
    expect(store.getState().post.data._id).toEqual(_posts[0]._id)
  })

  it('expect post to have property title...', () => {
    expect(store.getState().post.data.title).toEqual(_posts[0].title)
  })

  it('expect post to have property body...', () => {
    expect(store.getState().post.data.body).toEqual(_posts[0].body)
  })

  it('expect post to have property summary...', () => {
    expect(store.getState().post.data.summary).toEqual(_posts[0].summary)
  })
})
