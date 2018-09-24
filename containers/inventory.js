import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import getConfig from 'next/config'
import { inventory as api } from '../api'
import Layout from '../layouts/Main'
import Table from '../components/inventory/Table'
import { fetchDevices, searchInventory, getInventoryPageState } from '../redux/stores/inventory'

const { publicRuntimeConfig } = getConfig()
const host = publicRuntimeConfig.hostname

class SearchPage extends React.Component {
  render () {
    const { hits } = this.props.devices

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

SearchPage.getInitialProps = async ({ store, isServer, pathname, query }) => {
  let data = await api.getInventory(host)
  let json = await data.json()

  store.dispatch(fetchDevices(json))

  return { custom: 'custom' }
}

function mapStateToProps (state) {
  return getInventoryPageState(state)
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchDevices, searchInventory }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
