import React from 'react'
import { connect } from 'react-redux'
import Layout from '../layouts/Main'

class About extends React.Component {
  render () {
    return (
      <Layout>
        <h1>About!</h1>
      </Layout>
    )
  }
}

/* -------------------------------------------------------------------------------- */

export default connect(
  state => ({
    state
  }),

  dispatch => ({
  })
)(About)
