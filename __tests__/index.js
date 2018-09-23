/* eslint-env jest */

import { shallow } from 'enzyme'
import Nav from '../components/ui/Nav'
import Post from '../components/posts/Post'

describe('Next', () => {
  it('Navbar...', () => {
    expect(shallow(<Nav pathname='/' />).find('nav').length).toEqual(1)
  })

  it('Post...', () => {
    let attrs = {
      title: 'title',
      body: 'body',
      summary: 'summary'
    }

    let post = shallow(<Post post={attrs} />)

    expect(post.find('h1').text()).toEqual('title')
    expect(post.find('p').text()).toEqual('body')
    expect(post.find('aside').text()).toEqual('summary')
  })
})
