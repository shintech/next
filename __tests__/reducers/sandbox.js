/* eslint-env jest */

import reducer from '../../redux/reducers'
import C from '../../redux/store/constants'
import storeFactory from '../../redux/store'
import state from '../../redux/store/state'

const store = storeFactory(true, state)

describe('sandbox reducer', () => {
  it('INCRREMENT...', () => {
    const action = {
      type: C.INCREMENT,
      value: 1
    }

    const { sandbox } = reducer(store.getState(), action)

    expect(sandbox)
      .toEqual({
        menu: 'hidden',
        value: 1
      })
  })

  it('CHANGE_MENU...', () => {
    const action = {
      type: C.CHANGE_MENU,
      payload: 1
    }

    const { sandbox } = reducer(store.getState(), action)

    expect(sandbox)
      .toEqual({
        menu: 1,
        value: 0
      })
  })
})
