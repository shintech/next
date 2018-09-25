/* eslint-env jest */

import { fetchDevices, searchInventory } from '../../redux/stores/inventory'
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
    facility: 'facility'
  }
]

nock('https://localhost')
  .get('/api/inventory')
  .reply(200, fakeResponse)

  .get('/api/search?slug=serial')
  .reply(200, fakeResponse)

describe('fetchDevices...', () => {
  beforeAll(async () => {
    let data = await api.getInventory('localhost')
    let json = await data.json()

    store.dispatch(fetchDevices(json))
  })

  it('expect devices to have length greater than 0...', () => {
    expect(store.getState().inventory.devices.length).toBeGreaterThan(0)
  })

  it('expect devices[0] to have property  _id...', () => {
    expect(store.getState().inventory.devices[0]._id).toEqual(fakeResponse[0]._id)
  })

  it('expect devices[0] to have property serial...', () => {
    expect(store.getState().inventory.devices[0].serial).toEqual(fakeResponse[0].serial)
  })

  it('expect devices[0] to have property manufacturer...', () => {
    expect(store.getState().inventory.devices[0].manufacturer).toEqual(fakeResponse[0].manufacturer)
  })

  it('expect devices[0] to have property model...', () => {
    expect(store.getState().inventory.devices[0].model).toEqual(fakeResponse[0].model)
  })

  it('expect devices[0] to have property facility...', () => {
    expect(store.getState().inventory.devices[0].facility).toEqual(fakeResponse[0].facility)
  })
})

describe('searchInventory...', () => {
  beforeAll(async () => {
    let devices = await api.searchInventory('serial', 'localhost')
    let json = await devices.json()

    store.dispatch(searchInventory(json))
  })

  it('expect devices to have length greater than 0...', () => {
    expect(store.getState().inventory.devices.length).toBeGreaterThan(0)
  })

  it('expect devices[0] to have property  _id...', () => {
    expect(store.getState().inventory.devices[0]._id).toEqual(fakeResponse[0]._id)
  })

  it('expect devices[0] to have property serial...', () => {
    expect(store.getState().inventory.devices[0].serial).toEqual(fakeResponse[0].serial)
  })

  it('expect devices[0] to have property manufacturer...', () => {
    expect(store.getState().inventory.devices[0].manufacturer).toEqual(fakeResponse[0].manufacturer)
  })

  it('expect devices[0] to have property model...', () => {
    expect(store.getState().inventory.devices[0].model).toEqual(fakeResponse[0].model)
  })

  it('expect devices[0] to have property facility...', () => {
    expect(store.getState().inventory.devices[0].facility).toEqual(fakeResponse[0].facility)
  })
})
