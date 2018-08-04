import React from 'react'
import { connect } from 'react-redux'
import { sandbox } from '../actions'
import Layout from '../layouts/Main'
import Page from '../layouts/Page'
import Graph from '../components/Graph'

class Sandbox extends React.Component {
  static getInitialProps ({ reduxStore, req }) {
    return { value: reduxStore.getState().sandbox.value }
  }

  render () {
    const { value, increment } = this.props

    return (
      <Layout>
        <Page>
          <hr />

          <h3>Dispatch increment action</h3>
          <p>{ value }</p>
          <button onClick={() => { increment() }}>Click</button>

          <hr />

          <h3>d3</h3>
          <Graph />
        </Page>
      </Layout>
    )
  }
}

/* -------------------------------------------------------------------------------- */

export default connect(
  state => ({
    value: state.sandbox.value
  }),

  dispatch => ({
    increment: () => {
      dispatch(sandbox.increment())
    }
  })
)(Sandbox)
