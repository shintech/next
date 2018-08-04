import React from 'react'
import { connect } from 'react-redux'
import { contacts } from '../api'
import Layout from '../layouts/Main'
import Page from '../layouts/Page'
import Section from '../components/Section'

const Contact = ({ references }) =>
  <Layout>
    <Page>
      <hr />
      <Section title='Github' references={references} />
    </Page>
  </Layout>

/* -------------------------------------------------------------------------------- */

Contact.getInitialProps = () => {
  return { ...contacts.fetchData() }
}

/* -------------------------------------------------------------------------------- */

export default connect(
  state => ({
    state
  }),

  dispatch => ({})
)(Contact)
