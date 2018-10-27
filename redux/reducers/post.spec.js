/* eslint-env jest */

import deepFreeze from 'deep-freeze'
import reducer from '../reducers/post'
import C from '../constants'

console.log = jest.fn()

describe('REDUX -> REDUCER -> FETCH_POST...', () => {
  const state = {
    error: false,
    loading: false,
    data: {}
  }

  const action = {
    type: C.FETCH_POST,
    payload: _postsMock[0]
  }

  deepFreeze(action)
  deepFreeze(state)

  const results = reducer(state, action)

  it('expect result to equal action.payload...', () => {
    expect(results.data).toEqual(action.payload)
  })

  it('expect post to have property _id...', () => {
    expect(results.data).toHaveProperty('_id')
  })

  it('expect post._id to equal mock._id  _id...', () => {
    expect(results.data._id).toEqual(_postsMock[0]._id)
  })

  it('expect post to have property title...', () => {
    expect(results.data).toHaveProperty('title')
  })

  it('expect post.title to equal mock.title...', () => {
    expect(results.data.title).toEqual(_postsMock[0].title)
  })

  it('expect post to have property body...', () => {
    expect(results.data).toHaveProperty('body')
  })

  it('expect post.body to equal mock.body...', () => {
    expect(results.data.body).toEqual(_postsMock[0].body)
  })

  it('expect post to have property summary...', () => {
    expect(results.data).toHaveProperty('summary')
  })

  it('expect post.summary to equal mock.summary...', () => {
    expect(results.data.summary).toEqual(_postsMock[0].summary)
  })
})
