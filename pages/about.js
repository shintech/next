import React from 'react'
import { connect } from 'react-redux'
import { about } from '../api'
import Layout from '../layouts/Main'
import Page from '../layouts/Page'

const About = ({ summary, description, links, sandbox, todos, references }) =>
  <Layout>
    <Page>
      <hr />

      <h3>Summary</h3>
      <ul>
        {summary.map((e, v) => <li key={v}>{e}</li>)}
      </ul>

      <h3>Description</h3>
      <p>{description}</p>

      <h3>Links</h3>
      <ul>
        {links.map((link, v) => <li key={v} ><strong>{link.title}</strong>: {link.details}</li>)}
      </ul>

      <h3>Sandbox</h3>
      <ul>
        {sandbox.map((link, v) => <li key={v}><strong>{link.title}</strong>: {link.details}</li>)}
      </ul>

      <h3>TODO</h3>
      <ul>
        {todos.map((todo, v) => <li key={v}>{todo.details}</li>)}
      </ul>

      <h3>References</h3>
      <ul>
        {references.map((ref, v) => <li key={v}><a href={ref.url}>{ref.url}</a></li>)}
      </ul>
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
