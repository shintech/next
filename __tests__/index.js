/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'

import Nav from '../components/Nav'

describe('Next', () => {
  it('Navbar test..."', () => {
    expect(shallow(<Nav pathname='/' />).find('nav').length).toEqual(1)
  })
})
