/* eslint-env jest */

import { initStore } from '../init'
import { fetchPost } from '../actions/post'

console.log = jest.fn()

const store = initStore({}, {
  isServer: true
})

describe('REDUX -> ACTION -> fetchPost()...', () => {
  beforeAll(() => {
    store.dispatch(fetchPost(_postsMock[0]))
  })

  it('expect post.data to have property title...', () => {
    expect(store.getState().post.data).toHaveProperty('title')
  })

  it('expect post.data to have property body...', () => {
    expect(store.getState().post.data).toHaveProperty('body')
  })

  it('expect post.data to have property summary...', () => {
    expect(store.getState().post.data).toHaveProperty('body')
  })
})
