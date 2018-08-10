/*  /pages/contact.js
*/

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { contacts } from '../api'
import Layout from '../layouts/Main'
import Page from '../layouts/Page'
import Section from '../layouts/Section'

const Contact = ({ references, pathname }) =>
  <Layout pathname={pathname}>
    <Page>
      <Section title='Github' >
        <ul>{references.map((ref, v) => <li key={v}><a href={ref.url}>{ref.title}</a></li>)}</ul>
      </Section>
    </Page>
  </Layout>

/* -------------------------------------------------------------------------------- */

Contact.getInitialProps = ({ pathname }) => ({ ...contacts.fetchData(), pathname })

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
