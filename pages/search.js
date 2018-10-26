import { connect } from 'react-redux'
import getConfig from 'next/config'
import PropTypes from 'prop-types'
import { inventory as api } from '../api'
import Layout from '../layouts/Main'
import Table from '../components/inventory/Table'
import { fetchAll, searchInventory } from '../redux/actions/inventory'

const { publicRuntimeConfig } = getConfig()
const host = publicRuntimeConfig.hostname

const SearchPage = ({ inventory, fetchAll, searchInventory }) => {
  let { devices, loading } = inventory

  return (<Layout title='search'>
    <form>
      <input type='search' placeholder='Search...' onKeyUp={async (e) => {
        if (e.target.value.length < 1) {
          let data = await api.getInventory(host)
          let json = await data.json()

          fetchAll(json)
        } else {
          let devices = await api.searchInventory(e.target.value, host)
          let json = await devices.json()

          searchInventory(json)
        }
      }} />
      <span>{loading || (!devices.hits.hits) ? '' : ` Results: ${devices.hits.hits.length}`}</span>
    </form>

    {(loading || !devices.hits.hits) ? <h1>Loading...</h1> : <Table hits={devices.hits.hits} /> }
  </Layout>)
}

SearchPage.getInitialProps = async ({ store, isServer, pathname, query }) => {
  let data = await api.getInventory(host)
  let json = await data.json()

  store.dispatch(fetchAll(json))

  return { custom: 'custom' }
}

SearchPage.propTypes = {
  fetchAll: PropTypes.func.isRequired,
  searchInventory: PropTypes.func.isRequired,
  inventory: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return state
}

function mapDispatchToProps (dispatch) {
  return {
    fetchAll: (json) => {
      dispatch(fetchAll(json))
    },

    searchInventory: (json) => {
      dispatch(searchInventory(json))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
