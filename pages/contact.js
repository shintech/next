import React from 'react'
import { connect } from 'react-redux'
import Layout from '../layouts/Main'

class Contact extends React.Component {
  render () {
    return (
      <Layout>
        <h1>Contact!</h1>
      </Layout>
    )
  }
}

export default connect(
  state => ({
    state
  }),

  dispatch => ({})
)(Contact)
