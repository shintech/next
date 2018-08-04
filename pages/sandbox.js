import React from 'react'
import { connect } from 'react-redux'
import Layout from '../layouts/Main'
import { sandbox } from '../actions'
import Graph from '../components/Graph'

class Sandbox extends React.Component {
  static getInitialProps ({ reduxStore, req }) {
    return { value: reduxStore.getState().sandbox.value }
  }

  render () {
    const { value, increment } = this.props

    return (
      <Layout>
        <h1>Sandbox</h1>
        <h3>{ value }</h3>
        <button onClick={() => { increment() }}>Click to increment...</button>
        <Graph />
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
