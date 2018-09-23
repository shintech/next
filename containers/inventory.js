import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {namespaceConfig} from 'fast-redux'
import Link from 'next/link'
import getConfig from 'next/config'
import { inventory as api } from '../api'
import Layout from '../layouts/Main'
import PostList from '../components/posts/PostList'
import Table from '../components/inventory/Table'

const DEFAULT_STATE = {devices: [], loading: true}

const { publicRuntimeConfig } = getConfig()
const host = publicRuntimeConfig.hostname

const {actionCreator, getState: getHomePageState} = namespaceConfig('devices', DEFAULT_STATE)

const fetchDevices = actionCreator(function fetchDevices (state, json) {
  return { ...state, devices: json, loading: false }
})

const searchInventory = actionCreator(function searchInventory (state, devices) {
  return { ...state, devices: devices, loading: false }
})

class SearchPage extends React.Component {
  render () {
    const {  hits } = this.props.devices

    return (
      <Layout title='search'>
        <form>
          <input type='text' placeholder='Search...' onKeyUp={async (e) => { 
             if (e.target.value.length < 1) {
                let data = await api.getInventory(host)
                let json = await data.json()
                this.props.fetchDevices(json)
             } else {
                let devices = await api.searchInventory(e.target.value, host)
                let json = await devices.json()
                this.props.searchInventory(json) 
             }
          }} />
        </form>

        {(this.props.loading || !hits.hits) ? <h1>Loading...</h1> : <Table hits={hits.hits} /> }
      </Layout>
    )
  }
}

SearchPage.getInitialProps = async ({store, isServer, pathname, query}) => {
  let data = await api.getInventory(host)
  let json = await data.json()

  store.dispatch(fetchDevices(json))

  return {custom: 'custom'}
}

function mapStateToProps (state) {
  return getHomePageState(state)
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchDevices, searchInventory }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)