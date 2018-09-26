/* eslint-env jest */

import { fetchDevices, searchInventory } from '../../redux/stores/inventory'
import { initStore } from '../../redux/init'
import { inventory as api } from '../../api'
import nock from 'nock'

console.log = jest.fn()

const store = initStore({}, {
  isServer: true
})

nock('https://localhost')
  .get('/api/inventory')
  .reply(200, _devicesMock)

  .get('/api/search?slug=1234')
  .reply(200, _devicesMock)

describe('fetchDevices...', () => {
  let _devices

  beforeAll(async () => {
    let data = await api.getInventory('localhost')
    let json = await data.json()
  
    store.dispatch(fetchDevices(json))
    
    _devices = store.getState().inventory.devices
  })

  it(`expect devices to have total hits equal to ${_devicesMock.hits.total}...`, () => {
    expect(_devices.hits.total).toEqual(_devicesMock.hits.total)
  })

  it('expect devices[0] to have property  _id...', () => {
    expect(_devices.hits.hits[0]._id).toEqual(_devicesMock.hits.hits[0]._id)
  })

  it('expect devices[0] to have property serial...', () => {
    expect(_devices.hits.hits[0].serial).toEqual(_devicesMock.hits.hits[0].serial)
  })

  it('expect devices[0] to have property manufacturer...', () => {
    expect(_devices.hits.hits[0].manufacturer).toEqual(_devicesMock.hits.hits[0].manufacturer)
  })

  it('expect devices[0] to have property model...', () => {
    expect(_devices.hits.hits[0].model).toEqual(_devicesMock.hits.hits[0].model)
  })

  it('expect devices[0] to have property facility...', () => {
    expect(_devices.hits.hits[0].facility).toEqual(_devicesMock.hits.hits[0].facility)
  })
})

describe('searchInventory...', () => {
  let _devices
  
  beforeAll(async () => {
    let devices = await api.searchInventory('1234', 'localhost')
    let json = await devices.json()

    _devices = store.getState().inventory.devices
  })

  it(`expect devices to have total hits equal to ${_devicesMock.hits.total}...`, () => {
    expect(_devices.hits.total).toEqual(_devicesMock.hits.total)
  })

  it('expect devices[0] to have property  _id...', () => {
    expect(_devices.hits.hits[0]._id).toEqual(_devicesMock.hits.hits[0]._id)
  })

  it('expect devices[0] to have property serial...', () => {
    expect(_devices.hits.hits[0].serial).toEqual(_devicesMock.hits.hits[0].serial)
  })

  it('expect devices[0] to have property manufacturer...', () => {
    expect(_devices.hits.hits[0].manufacturer).toEqual(_devicesMock.hits.hits[0].manufacturer)
  })

  it('expect devices[0] to have property model...', () => {
    expect(_devices.hits.hits[0].model).toEqual(_devicesMock.hits.hits[0].model)
  })

  it('expect devices[0] to have property facility...', () => {
    expect(_devices.hits.hits[0].facility).toEqual(_devicesMock.hits.hits[0].facility)
  })
})
