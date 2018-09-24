/* eslint-env jest */

import {  fetchPost } from '../../redux/stores/post'
import { initStore } from '../../redux/init'
import { posts as api } from '../../api'
import nock from 'nock'

console.log = jest.fn()

const store = initStore({}, {
  isServer: true
})

let fakeResponse = [
  {
    _id: '5b9eeda95744c570b3689035',
    title: 'possimus molestiae mollitia',
    body: 'Architecto nesciunt quidem. Modi ut a aut. Nobis est occaecati quia vitae officia sed adipisci ab odio. Aut enim et. Qui et error ipsum atque ut molestiae reprehenderit dolorum explicabo. Repudiandae dolor fugit non.\n \rEst sapiente voluptatem nihil et magnam et. Quis non et iure. Minima perspiciatis ducimus ab quo aliquid. Fuga molestias et cupiditate nesciunt qui possimus. Delectus asperiores nisi ut dolores ab rerum. Minima vero sit blanditiis impedit et.\n \rEt occaecati est rem quasi. Repellat aut consequatur aut. Quo quas assumenda voluptas cum placeat nam deserunt id. In sed in. Nisi pariatur accusamus animi sequi.',
    summary: 'Labore ipsum sed maxime qui iusto voluptatem quia.'
  }
]

nock('https://shintech.ninja')
  .get('/api/posts')
  .reply(200, fakeResponse)
  
  .get('/api/posts/5b9eeda95744c570b3689035')
  .reply(200, fakeResponse[0])

describe('posts actions', () => {
  it('fetchPosts', async () => {
    let data = await api.getPost('5b9eeda95744c570b3689035', 'shintech.ninja')
    let json = await data.json()
    
    store.dispatch(fetchPost(json))
    
    expect(store.getState().post.post._id).toEqual(fakeResponse[0]._id)
    expect(store.getState().post.post.title).toEqual(fakeResponse[0].title)
    expect(store.getState().post.post.body).toEqual(fakeResponse[0].body)
    expect(store.getState().post.post.summary).toEqual(fakeResponse[0].summary)
  })
})