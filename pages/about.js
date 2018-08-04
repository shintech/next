import React from 'react'
import { connect } from 'react-redux'
import Layout from '../layouts/Main'
import Page from '../layouts/Page'

class About extends React.Component {
  render () {
    let obj = {
      summary: [
        'Next.js',
        'React.js',
        'Redux',
        'Express',
        'PostgreSQL',
        'd3'
      ],

      description: 'Universal JavaScript application built with Next.js and Express.js',

      links: [
        { title: 'home', details: 'List of data fetched from /api/post' },
        { title: 'about', details: 'Details about the application' },
        { title: 'contact', details: 'Information about github or other accounts' }
      ],

      sandbox: [
        { title: 'increment', details: 'dispatches redux action INCREMENT' },
        { title: 'd3', details: 'button currently uses d3 to change background color' }
      ],

      todos: [
        { details: 'make about and contact pages dynamic - possibly retrieve data from or just display readme file' },
        { details: 'create readme file' },
        { details: 'write some tests' }
      ],

      references: [
        { url: 'https://github.com/zeit/next.js' },
        { url: 'https://github.com/timberio/next-go/' }
      ]
    }

    return (
      <Layout>
        <Page>
          <hr />

          <h3>Summary</h3>
          <ul>
            {obj.summary.map(e => <li>{e}</li>)}
          </ul>

          <h3>Description</h3>
          <p>{obj.description}</p>

          <h3>Links</h3>
          <ul>
            {obj.links.map(link => <li><strong>{link.title}</strong>: {link.details}</li>)}
          </ul>

          <h3>Sandbox</h3>
          <ul>
            {obj.sandbox.map(link => <li><strong>{link.title}</strong>: {link.details}</li>)}
          </ul>

          <h3>TODO</h3>
          <ul>
            {obj.todos.map(todo => <li>{todo.details}</li>)}
          </ul>

          <h3>References</h3>
          <ul>
            {obj.references.map(ref => <li><a href={ref.url}>{ref.url}</a></li>)}
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
