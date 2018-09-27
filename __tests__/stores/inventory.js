/* eslint-env jest */

import { fetchDevices, searchInventory } from '../../redux/stores/inventory'
import { initStore } from '../../redux/init'
import { inventory as api } from '../../api'
import nock from 'nock'

console.log = jest.fn()

nock('https://localhost')
  .get('/api/inventory')
  .reply(200, _devicesMock)

  .get('/api/search?slug=1234')
  .reply(200, _devicesMock)

describe('fetchDevices...', () => {
  let _devices, _source, _mockSource

  beforeAll(async () => {
    let store = initStore({}, {
      isServer: true
    })

    let data = await api.getInventory('localhost')
    let json = await data.json()

    store.dispatch(fetchDevices(json))

    _devices = store.getState().inventory.devices
    _source = _devices.hits.hits[0]._source
    _mockSource = _devicesMock.hits.hits[0]._source
  })

  it(`expect devices to have total hits equal to ${_devicesMock.hits.total}...`, () => {
    expect(_devices.hits.total).toEqual(_devicesMock.hits.total)
  })

  it('expect devices[0] to have property  _id...', () => {
    expect(_devices.hits.hits[0]._id).toEqual(_devicesMock.hits.hits[0]._id)
  })

  it('expect devices[0] to have property serial...', () => {
    expect(_source.serial).toEqual(_mockSource.serial)
  })

  it('expect devices[0] to have property manufacturer...', () => {
    expect(_source.manufacturer).toEqual(_mockSource.manufacturer)
  })

  it('expect devices[0] to have property model...', () => {
    expect(_source.model).toEqual(_mockSource.model)
  })

  it('expect devices[0] to have property facility...', () => {
    expect(_source.facility).toEqual(_mockSource.facility)
  })
})

describe('searchInventory...', () => {
  let _devices, _source, _mockSource

  beforeAll(async () => {
    let store = initStore({}, {
      isServer: true
    })

    let devices = await api.searchInventory('1234', 'localhost')
    let json = await devices.json()

    store.dispatch(searchInventory(json))

    _devices = store.getState().inventory.devices
    _source = _devices.hits.hits[0]._source
    _mockSource = _devicesMock.hits.hits[0]._source
  })

  it(`expect devices to have total hits equal to ${_devicesMock.hits.total}...`, () => {
    expect(_devices.hits.total).toEqual(_devicesMock.hits.total)
  })

  it('expect devices[0] to have property _id...', () => {
    expect(_devices.hits.hits[0]._id).toEqual(_devicesMock.hits.hits[0]._id)
  })

  it('expect devices[0] to have property serial...', () => {
    expect(_source.serial).toEqual(_mockSource.serial)
  })

  it('expect devices[0] to have property manufacturer...', () => {
    expect(_source.manufacturer).toEqual(_mockSource.manufacturer)
  })

  it('expect devices[0] to have property model...', () => {
    expect(_source.model).toEqual(_mockSource.model)
  })

  it('expect devices[0] to have property facility...', () => {
    expect(_source.facility).toEqual(_mockSource.facility)
  })
})
