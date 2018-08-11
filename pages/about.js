/*  /pages/about.js
*/
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchData } from '../api/about'
import Layout from '../layouts/Main'
import Grid from '../layouts/Grid'
import Section from '../layouts/Section'

const About = ({ summary, description, links, sandboxLinks, references, tasks, pathname }) =>
  <Layout pathname={pathname}>
    <Grid>
      <Section title='Summary'>
        <ul>{summary.map((e, v) => <li key={v}>{e.details}</li>)}</ul>
      </Section>

      <Section title='Description'>
        <p>
          {description.paragraph}
          <br />
          <strong>Usage</strong>
          <br />
          <strong>Development</strong>:  {description.usage.development}
          <br />
          <strong>Production</strong>:  {description.usage.production}
        </p>
      </Section>

      <Section title='Links'>
        <ul>{links.map((link, v) => <li key={v} ><strong>{link.title}</strong>: {link.details}</li>)}</ul>
      </Section>

      <Section title='References'>
        <ul>{references.map((ref, v) => <li key={v}><a href={ref.url}>{ref.title}</a></li>)}</ul>
      </Section>

      <Section title='Sandbox'>
        <ul>{sandboxLinks.map((link, v) => <li key={v} ><strong>{link.title}</strong>: {link.details}</li>)}</ul>
      </Section>

      <Section title='TODO'>
        <ul>{tasks.map((task, v) => <li key={v}>{task.details}</li>)}</ul>
      </Section>
    </Grid>
  </Layout>

/* -------------------------------------------------------------------------------- */

About.getInitialProps = async ({ pathname }) => {
  let res = await fetchData()
  let json = await res.json()

  return { ...json, pathname }
}

/* -------------------------------------------------------------------------------- */

About.propTypes = {
  summary: PropTypes.array.isRequired,
  description: PropTypes.object.isRequired,
  links: PropTypes.array.isRequired,
  sandboxLinks: PropTypes.array.isRequired,
  references: PropTypes.array.isRequired
}

/* -------------------------------------------------------------------------------- */

export default connect(
  state => state,
  dispatch => ({ })
)(About)
