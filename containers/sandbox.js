/*  /pages/sandbox.js
*/
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import action from '../redux/actions'
import Layout from '../layouts/Main'
import Grid from '../layouts/Grid'
import Section from '../layouts/Section'
import BarGraph from '../components/sandbox/BarGraph'
import Flex from '../components/sandbox/Flex'
import GridComponent from '../components/sandbox/Grid'
import Menu from '../components/sandbox/Menu'
import {bindActionCreators} from 'redux'
import getConfig from 'next/config'
import {namespaceConfig} from 'fast-redux'

const menuData = [1, 2, 3, 4]

const DEFAULT_STATE = {
  value: 0
}

const { publicRuntimeConfig } = getConfig()
const host = publicRuntimeConfig.hostname

const {actionCreator, getState: getPageState} = namespaceConfig('sandbox', DEFAULT_STATE)

const bumpIncrement = actionCreator(function fetchPost (state, increment) {
  return { ...state, value: state.value + increment }
})

const Sandbox = ({ value, bumpIncrement }) => {
  /* eslint-disable */
  return (
    <Layout title='sandbox'>
      <Grid>
        <Section title='Redux INCREMENT'>
          <hr />
          <p>{ value }</p>
          <hr />
          <button onClick={() => { bumpIncrement(1) }}>Click</button>
        </Section>          
      </Grid>
    </Layout>
  )
  /* eslint-enable */
}

/* -------------------------------------------------------------------------------- */

Sandbox.getInitialProps = ({ store, isServer, pathname, query }) => ({ })

/* -------------------------------------------------------------------------------- */

// Sandbox.propTypes = {
//   value: PropTypes.number.isRequired,
//   increment: PropTypes.func.isRequired
// }

/* -------------------------------------------------------------------------------- */

function mapStateToProps (state) {
  return getPageState(state)
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ bumpIncrement }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Sandbox)