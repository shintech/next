/*  /pages/about.js
*/

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import action from '../actions'
import { about } from '../api'
import Layout from '../layouts/Main'
import Grid from '../layouts/Grid'
import Section from '../layouts/Section'

class About extends React.Component {
  async componentDidMount () {
    this.props.fetchTasks()
  }

  render () {
    const { summary, description, links, sandbox, references, state, pathname } = this.props

    return (
      <Layout pathname={pathname}>
        <Grid>
          <Section title='Summary'>
            <ul>{summary.map((e, v) => <li key={v}>{e}</li>)}</ul>
          </Section>

          <Section title='Description'>
            <p>{description.paragraph}</p>
            <p>
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
            <ul>{sandbox.map((link, v) => <li key={v} ><strong>{link.title}</strong>: {link.details}</li>)}</ul>
          </Section>

          <Section title='TODO'>
            <div>
              { (state.about.loading) ? <p>Loading...</p>
                : <ul>
                  {state.about.data.map(post =>
                    <li key={post.id}>{post.details}</li>
                  )}
                </ul>
              }
            </div>
          </Section>
        </Grid>
      </Layout>
    )
  }
}

/* -------------------------------------------------------------------------------- */

About.getInitialProps = ({ pathname }) => ({ ...about.fetchData(), pathname })

/* -------------------------------------------------------------------------------- */

About.propTypes = {
  summary: PropTypes.array.isRequired,
  description: PropTypes.object.isRequired,
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
    fetchTasks: () => {
      dispatch(action.about.fetchTasks())
    }
  })
)(About)
