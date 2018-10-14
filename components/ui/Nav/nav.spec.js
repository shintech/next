/* eslint-env jest */

import { shallow } from 'enzyme'
import Nav from './index'

console.log = jest.fn()

describe('COMPONENT -> UI -> Nav...', () => {
  it('expect nav length to equal 1...', () => {
    expect(shallow(<Nav pathname='/' />).find('nav').length).toEqual(1)
  })
})
