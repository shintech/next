/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'

import Nav from '../components/Nav'
import Post from '../components/Post'

describe('Next', () => {
  it('Navbar...', () => {
    expect(shallow(<Nav pathname='/' />).find('nav').length).toEqual(1)
  })

  it('Post test...', () => {
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
