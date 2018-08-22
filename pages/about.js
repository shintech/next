/*  /pages/about.js
*/
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import action from '../actions'
import { fetchData } from '../api/about'
import { fetchTasks } from '../api/tasks'
import Layout from '../layouts/Main'
import Grid from '../layouts/Grid'
import Section from '../layouts/Section'

const About = ({ modal, summary, description, links, sandboxLinks, references, tasks, pathname }) =>
  <Layout title='about'>
    <Grid>
      <Section title='Summary' modal={modal}>
        <ul>{summary.map((e, v) => <li className='blobs' key={v}>{e.details}</li>)}</ul>
      </Section>

      <Section title='Description' modal={modal}>
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

      <Section title='Links' modal={modal}>
        <ul>{links.map((link, v) => <li key={v} ><strong>{link.title}</strong>: {link.details}</li>)}</ul>
      </Section>

      <Section title='References' modal={modal}>
        <ul>{references.map((ref, v) => <li key={v}><a href={ref.url}>{ref.title}</a></li>)}</ul>
      </Section>

      <Section title='Sandbox' modal={modal}>
        <ul>{sandboxLinks.map((link, v) => <li key={v} ><strong>{link.title}</strong>: {link.details}</li>)}</ul>
      </Section>

      <Section title='TODO' modal={modal}>
        <ul>{tasks.map((task, v) => <li key={v}>{task.details}</li>)}</ul>
      </Section>
    </Grid>
  </Layout>

/* -------------------------------------------------------------------------------- */

About.getInitialProps = async ({ store, isServer, pathname, query }) => {
  try {
    let _about = await fetchData()
    let about = await _about.json()

    let _tasks = await fetchTasks()
    let tasks = await _tasks.json()

    return { ...about, tasks }
  } catch (err) {
    console.error('Failed to fetch in About.getInitialProps...')
  }
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
  dispatch => ({
    modal: ({title, children}) => {
      dispatch(action.modal.toggleModal({ title, children }))
    }
  })
)(About)
