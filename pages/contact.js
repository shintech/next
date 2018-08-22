/*  /pages/contact.js
*/
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchData } from '../api/contacts'

import Layout from '../layouts/Main'
import Section from '../layouts/Section'

const Contact = ({ references }) =>
  <Layout title='contact'>
    <Section title='Github' >
      <ul>{references.map((ref, v) => <li key={v}><a href={ref.url}>{ref.title}</a></li>)}</ul>
    </Section>
  </Layout>

/* -------------------------------------------------------------------------------- */

Contact.getInitialProps = async ({ store, isServer, pathname, query }) => {
  let res = await fetchData()
  let json = await res.json()

  return { ...json }
}

/* -------------------------------------------------------------------------------- */

Contact.propTypes = {
  references: PropTypes.array.isRequired
}

/* -------------------------------------------------------------------------------- */

export default connect(
  state => state,
  dispatch => ({})
)(Contact)
