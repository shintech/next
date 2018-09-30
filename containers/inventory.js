import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import getConfig from 'next/config'
import PropTypes from 'prop-types'
import { inventory as api } from '../api'
import Layout from '../layouts/Main'
import Table from '../components/inventory/Table'
import { fetchDevices, searchInventory, getInventoryPageState } from '../redux/stores/inventory'

const { publicRuntimeConfig } = getConfig()
const host = publicRuntimeConfig.hostname

const SearchPage = ({ devices, loading, fetchDevices, searchInventory }) =>
  <Layout title='search'>
    <form>
      <input type='text' placeholder='Search...' onKeyUp={async (e) => {
        if (e.target.value.length < 1) {
          let data = await api.getInventory(host)
          let json = await data.json()

          fetchDevices(json)
        } else {
          let devices = await api.searchInventory(e.target.value, host)
          let json = await devices.json()

          searchInventory(json)
        }
      }} />
      <span>{loading || (!devices.hits.hits) ? '' : ` Results: ${devices.hits.hits.length}`}</span>
    </form>

    {(loading || !devices.hits.hits) ? <h1>Loading...</h1> : <Table hits={devices.hits.hits} /> }
  </Layout>

SearchPage.getInitialProps = async ({ store, isServer, pathname, query }) => {
  let data = await api.getInventory(host)
  let json = await data.json()

  store.dispatch(fetchDevices(json))

  return { custom: 'custom' }
}

SearchPage.propTypes = {
  devices: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  fetchDevices: PropTypes.func.isRequired,
  searchInventory: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  return getInventoryPageState(state)
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchDevices, searchInventory }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
