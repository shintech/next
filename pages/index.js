import React from 'react'
import { connect } from 'react-redux'
import { posts } from '../actions'
import Layout from '../layouts/Main'
import Post from '../components/Post'

class Home extends React.Component {
  componentWillMount () {
    this.props.fetchPosts()
  }

  render () {
    const { loading, data } = this.props.posts

    return (
      <Layout>
        {(loading) ? <ul>loading...</ul>
          : <ul>
            {data.map(p => <Post key={p.title} post={p} />)}
          </ul>
        }
      </Layout>
    )
  }
}

/* -------------------------------------------------------------------------------- */

export default connect(
  state => {
    return {
      posts: state.posts
    }
  },

  dispatch => ({
    fetchPosts: () => {
      dispatch(posts.fetchPosts())
    }
  })
)(Home)
