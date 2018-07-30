import React from 'react'
import { connect } from 'react-redux'
import { about } from '../actions'
import { getPosts } from '../api/posts'
import Layout from '../layouts/Main'
import Post from '../components/Post'

class Home extends React.Component {
  static async getInitialProps ({ reduxStore, req }) {
    const res = await getPosts()
    const json = await res.json()
    return { posts: json }
  }

  render () {
    return (
      <Layout>
        <ul>
          {this.props.posts.map(p => <Post key={p.title} post={p} />)}
        </ul>
      </Layout>
    )
  }
}

export default connect(
  state => ({
    state
  }),

  dispatch => ({
    increment: () => {
      dispatch(about.increment())
    }
  })
)(Home)
