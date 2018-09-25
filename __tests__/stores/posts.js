/* eslint-env jest */

import { fetchPosts } from '../../redux/stores/posts'
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
    expect(store.getState().posts.data[0]._id).toEqual(fakeResponse[0]._id)
  })

  it('expect post[0] to have title...', () => {
    expect(store.getState().posts.data[0].title).toEqual(fakeResponse[0].title)
  })

  it('expect post[0] to have body...', () => {
    expect(store.getState().posts.data[0].body).toEqual(fakeResponse[0].body)
  })

  it('expect post[0] to have summary...', () => {
    expect(store.getState().posts.data[0].summary).toEqual(fakeResponse[0].summary)
  })
})
