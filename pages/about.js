import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { about } from '../api'
import Layout from '../layouts/Main'
import Page from '../layouts/Page'
import Figure from '../components/Figure'

const About = ({ summary, description, links, sandbox, todos, references, pathname }) =>
  <Layout pathname={pathname}>
    <Page>
      <Figure title='Summary'>
        <ul>{summary.map((e, v) => <li key={v}>{e}</li>)}</ul>
      </Figure>

      <Figure title='Description'>
        <p>{description}</p>
      </Figure>

      <Figure title='Links'>
        <ul>{links.map((link, v) => <li key={v} ><strong>{link.title}</strong>: {link.details}</li>)}</ul>
      </Figure>

      <Figure title='Sandbox'>
        <ul>{sandbox.map((link, v) => <li key={v} ><strong>{link.title}</strong>: {link.details}</li>)}</ul>
      </Figure>

      <Figure title='TODO'>
        <ul>{todos.map((e, v) => <li key={v}>{e}</li>)}</ul>
      </Figure>

      <Figure title='References'>
        <ul>{references.map((ref, v) => <li key={v}><a href={ref.url}>{ref.title}</a></li>)}</ul>
      </Figure>
    </Page>
  </Layout>

/* -------------------------------------------------------------------------------- */

About.getInitialProps = ({ pathname }) => ({ ...about.fetchData(), pathname })

/* -------------------------------------------------------------------------------- */

About.propTypes = {
  summary: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
  sandbox: PropTypes.array.isRequired,
  references: PropTypes.array.isRequired
}

/* -------------------------------------------------------------------------------- */

export default connect(
  state => ({
    state
  }),

  dispatch => ({
  })
)(About)
