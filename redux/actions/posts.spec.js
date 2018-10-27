/* eslint-env jest */

import { initStore } from '../init'
import { fetchPosts } from '../actions/posts'

console.log = jest.fn()

const store = initStore({}, {
  isServer: true
})

describe('REDUX -> ACTION -> fetchPosts()...', () => {
  beforeAll(() => {
    store.dispatch(fetchPosts(_postsMock))
  })

  it('expect posts.data.length to be greater than 0...', () => {
    expect(store.getState().posts.data.length).toBeGreaterThan(0)
  })

  it('expect posts.data[0] to have property title...', () => {
    expect(store.getState().posts.data[0]).toHaveProperty('title')
  })

  it('expect posts.data[0] to have property body...', () => {
    expect(store.getState().posts.data[0]).toHaveProperty('body')
  })

  it('expect posts.data[0] to have property summary...', () => {
    expect(store.getState().posts.data[0]).toHaveProperty('body')
  })
})
