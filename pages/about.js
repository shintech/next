import { connect } from 'react-redux'
import { about } from '../api'
import Layout from '../layouts/Main'
import Page from '../layouts/Page'
import Section from '../components/Section'

const About = ({ summary, description, links, sandbox, todos, references }) =>
  <Layout>
    <Page>
      <hr />
      <Section title='Summary' list={summary} />
      <Section title='Description' text={description} />
      <Section title='Links' links={links} />
      <Section title='Sandbox' links={sandbox} />
      <Section title='TODO' list={todos} />
      <Section title='References' references={references} />
    </Page>
  </Layout>

/* -------------------------------------------------------------------------------- */

About.getInitialProps = () => {
  return { ...about.fetchData() }
}

/* -------------------------------------------------------------------------------- */

export default connect(
  state => ({
    state
  }),

  dispatch => ({
  })
)(About)
