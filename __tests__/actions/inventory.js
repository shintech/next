/* eslint-env jest */

import {  fetchDevices, searchInventory } from '../../redux/stores/inventory'
import { initStore } from '../../redux/init'
import { inventory as api } from '../../api'
import nock from 'nock'

console.log = jest.fn()

const store = initStore({}, {
  isServer: true
})

let fakeResponse = [
  {
    _id: '5b9eeda95744c570b3689035',
    serial: 'serial',
    manufacturer: 'manufacturer',
    model: 'model',
    facility: 'facility',
  }
]

nock('https://localhost')
  .get('/api/inventory')
  .reply(200, fakeResponse)
  
  .get('/api/search?slug=serial')
  .reply(200, fakeResponse)
  
describe('inventory actions', () => {
  it('fetchDevices', async () => {
    let data = await api.getInventory('localhost')
    let json = await data.json()
    
    store.dispatch(fetchDevices(json))
    
    expect(store.getState().devices.devices.length).toBeGreaterThan(0)
    expect(store.getState().devices.devices[0]._id).toEqual(fakeResponse[0]._id)
    expect(store.getState().devices.devices[0].serial).toEqual(fakeResponse[0].serial)
    expect(store.getState().devices.devices[0].manufacturer).toEqual(fakeResponse[0].manufacturer)
    expect(store.getState().devices.devices[0].model).toEqual(fakeResponse[0].model)
    expect(store.getState().devices.devices[0].facility).toEqual(fakeResponse[0].facility)
  })
  
  it('searchInventory', async () => {
    let devices = await api.searchInventory('serial', 'localhost')
    let json = await devices.json()
    
    store.dispatch(searchInventory(json))     
    expect(store.getState().devices.devices[0]._id).toEqual(fakeResponse[0]._id)
    expect(store.getState().devices.devices[0].serial).toEqual(fakeResponse[0].serial)
    expect(store.getState().devices.devices[0].manufacturer).toEqual(fakeResponse[0].manufacturer)
    expect(store.getState().devices.devices[0].model).toEqual(fakeResponse[0].model)
    expect(store.getState().devices.devices[0].facility).toEqual(fakeResponse[0].facility)    
  })
})