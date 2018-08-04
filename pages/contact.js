import React from 'react'
import { connect } from 'react-redux'
import Layout from '../layouts/Main'

class Contact extends React.Component {
  render () {
    return (
      <Layout>
        <h1>Contact!</h1>
        <hr />
        <h3>Github</h3>
        <ul>
          <li><a href='https://github.com/mprather1' >mprather1</a></li>
          <li><a href='https://github.com/shintech' >shintech</a></li>
          <li><a href='https://github.com/shintech/next' >shintech/next</a></li>
        </ul>
      </Layout>
    )
  }
}

/* -------------------------------------------------------------------------------- */

export default connect(
  state => ({
    state
  }),

  dispatch => ({})
)(Contact)
