import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { contacts } from '../api'
import Layout from '../layouts/Main'
import Page from '../layouts/Page'
import Section from '../components/Section'

const Contact = ({ references }) =>
  <Layout>
    <Page>
      <Section title='Github' references={references} />
    </Page>
  </Layout>

/* -------------------------------------------------------------------------------- */

Contact.getInitialProps = () => {
  return { ...contacts.fetchData() }
}

/* -------------------------------------------------------------------------------- */

Contact.propTypes = {
  references: PropTypes.array.isRequired
}

/* -------------------------------------------------------------------------------- */

export default connect(
  state => ({
    state
  }),

  dispatch => ({})
)(Contact)
