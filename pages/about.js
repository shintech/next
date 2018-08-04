import React from 'react'
import { connect } from 'react-redux'
import Layout from '../layouts/Main'
import Page from '../layouts/Page'

class About extends React.Component {
  render () {
    return (
      <Layout>
        <Page>
          <hr />

          <h3>Summary</h3>
          <ul>
            <li>Next.js</li>
            <li>React.js</li>
            <li>Redux</li>
            <li>Webpack</li>
            <li>Express.js</li>
            <li>PostgreSQL</li>
            <li>d3</li>
          </ul>

          <h3>Description</h3>
          <p>
          Universal JavaScript application built with Next.js and Express.js
          </p>

          <h3>Links</h3>
          <p>
            <strong>home</strong>: List of data fetched from /api/posts<br />
            <strong>about</strong>: Details about the application<br />
            <strong>contact</strong>: Information about github or other accounts<br />
          </p>

          <h3>Sandbox</h3>
          <p>
            <strong>increment</strong>: dispatches redux action INCREMENT<br />
            <strong>color</strong>: button currently uses d3 to change background color
          </p>

          <h3>TODO</h3>
          <ul>
            <li>make about and contact pages dynamic - possibly retrieve data from or just display readme file</li>
            <li>create readme file</li>
            <li>write some tests</li>
          </ul>

          <h3>References</h3>
          <ul>
            <li><a href='https://github.com/zeit/next.js'>https://github.com/zeit/next.js</a></li>
            <li><a href='https://github.com/timberio/next-go/'>https://github.com/timberio/next-go/</a></li>
          </ul>
        </Page>
      </Layout>
    )
  }
}

/* -------------------------------------------------------------------------------- */

export default connect(
  state => ({
    state
  }),

  dispatch => ({
  })
)(About)
