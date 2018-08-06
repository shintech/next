import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import action from '../actions'
import Layout from '../layouts/Main'
import Page from '../layouts/Page'
import Graph from '../components/Graph'

const Sandbox = ({ sandbox, increment }) =>
  <Layout>
    <Page>
      <hr />

      <h3>Dispatch increment action</h3>
      <p>{ sandbox.value }</p>
      <button onClick={() => { increment() }}>Click</button>

      <hr />

      <h3>d3</h3>
      <Graph />
    </Page>
  </Layout>

/* -------------------------------------------------------------------------------- */

Sandbox.getInitialProps = ({ store, req }) => ({ ...store.getState() })

/* -------------------------------------------------------------------------------- */

Sandbox.propTypes = {
  sandbox: PropTypes.object.isRequired,
  increment: PropTypes.func.isRequired
}

/* -------------------------------------------------------------------------------- */

export default connect(
  state => state,

  dispatch => ({
    increment: () => {
      dispatch(action.sandbox.increment())
    }
  })
)(Sandbox)
