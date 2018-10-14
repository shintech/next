/* eslint-env jest */

import { shallow } from 'enzyme'
import Post from './index'

console.log = jest.fn()

describe('COMPONENT -> POSTS -> Post...', () => {
  let attrs = {
    title: 'title',
    body: 'body',
    summary: 'summary'
  }

  let post = shallow(<Post post={attrs} />)

  it(`expect h1 text to equal ${attrs.title}...`, () => {
    expect(post.find('h1').text()).toEqual('title')
  })

  it(`expect p text to equal ${attrs.body}...`, () => {
    expect(post.find('p').text()).toEqual('body')
  })

  it(`expect h1 text to equal ${attrs.summary}...`, () => {
    expect(post.find('aside').text()).toEqual('summary')
  })
})
