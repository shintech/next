/* eslint-env jest */

import {  bumpIncrement, changeMenu } from '../../redux/stores/sandbox'
import { initStore } from '../../redux/init'

console.log = jest.fn()

const initialState = {
  sandbox: {
    value: 0,
    menu: 'hidden',
    menuData: [1, 2, 3, 4]
  }
}

const store = initStore(initialState, { isServer: true })

describe('posts actions', () => {
  it('bumpIncrement', async () => {
    store.dispatch(bumpIncrement(1))

    expect(store.getState().sandbox.value).toEqual(1)
  })
  
  it('changeMenu', () => {
    store.dispatch(changeMenu(2))
    
    expect(store.getState().sandbox.menu).toEqual(2)
  })
})
