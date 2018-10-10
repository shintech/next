/* eslint-env jest */

import { shallow } from 'enzyme'
import Nav from '../../components/ui/Nav'
import Post from '../../components/posts/Post'
import Auth from '../../components/users/Auth'

describe('Nav component...', () => {
  it('expect nav length to equal 1...', () => {
    expect(shallow(<Nav pathname='/' />).find('nav').length).toEqual(1)
  })
})

describe('Post component...', () => {
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

describe('Login Component', () => {
  let auth = shallow(<Auth />)

  it(`expect h1 text to equa...`, () => {
    expect(auth.find('h1').text()).toEqual('login')
  })
})
