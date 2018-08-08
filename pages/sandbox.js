import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import action from '../actions'
import Layout from '../layouts/Main'
import Page from '../layouts/Page'
import Graph from '../components/Graph'
import Figure from '../components/Figure'

const Sandbox = ({ value, increment, fetchGraph, pathname }) =>
  <Layout pathname={pathname}>
    <Page>
      <Figure title='INCREMENT'>
        <p>{ value }</p>
        <button onClick={() => { increment() }}>Click</button>
        <hr />
      </Figure>

      <Figure title='Graphs'>
        <Graph onload={fetchGraph} />
        <hr />
      </Figure>
    </Page>
  </Layout>

/* -------------------------------------------------------------------------------- */

Sandbox.getInitialProps = ({ pathname }) => ({ pathname })

/* -------------------------------------------------------------------------------- */

Sandbox.propTypes = {
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired
}

/* -------------------------------------------------------------------------------- */

export default connect(
  state => ({
    value: state.sandbox.value
  }),

  dispatch => ({
    increment: () => {
      dispatch(action.sandbox.increment())
    },

    fetchGraph: () => {
      dispatch(action.sandbox.fetchGraph())
    }
  })
)(Sandbox)
