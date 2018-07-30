import React from 'react'
import { connect } from 'react-redux'
import { about } from '../actions'
import Layout from '../layouts/Main'

class About extends React.Component {
  static getInitialProps ({ reduxStore, req }) {
    return { value: reduxStore.getState().about.value }
  }

  render () {
    return (
      <Layout>
        <h1>About</h1>
        <h3>{this.props.value }</h3>
        <button onClick={() => { this.props.increment() }}>Click</button>
      </Layout>
    )
  }
}

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
