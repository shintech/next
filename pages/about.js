import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import action from '../actions'
import { about } from '../api'
import Layout from '../layouts/Main'
import Page from '../layouts/Page'
import Figure from '../components/Figure'

class About extends React.Component {
  async componentDidMount () {
    this.props.fetchTasks()
  }

  render () {
    const { summary, description, links, sandbox, references, state, pathname } = this.props

    return (
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
            <div>
              { (state.about.loading) ? <h3>Loading...</h3>
                : <ul>
                  {state.about.data.map(post =>
                    <li key={post.id}>{post.details}</li>
                  )}
                </ul>
              }
            </div>
          </Figure>

          <Figure title='References'>
            <ul>{references.map((ref, v) => <li key={v}><a href={ref.url}>{ref.title}</a></li>)}</ul>
          </Figure>
        </Page>
      </Layout>
    )
  }
}

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
    fetchTasks: () => {
      dispatch(action.about.fetchTasks())
    }
  })
)(About)
