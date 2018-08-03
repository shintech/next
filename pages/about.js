import React from 'react'
import { connect } from 'react-redux'
import { about } from '../actions'
import Layout from '../layouts/Main'
import Graph from '../components/Graph'

class About extends React.Component {
  static getInitialProps ({ reduxStore, req }) {
    return { value: reduxStore.getState().about.value }
  }

  render () {
    const { value, increment } = this.props

    return (
      <Layout>
        <h1>About</h1>
        <h3>{ value }</h3>
        <button onClick={() => { increment() }}>Click</button>
        <Graph />
      </Layout>
    )
  }
}

/* -------------------------------------------------------------------------------- */

export default connect(
  state => ({
    value: state.about.value
  }),

  dispatch => ({
    increment: () => {
      dispatch(about.increment())
    }
  })
)(About)
