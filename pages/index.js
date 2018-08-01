import React from 'react'
import { connect } from 'react-redux'
import { posts } from '../actions'
import Layout from '../layouts/Main'
import PostList from '../components/PostList'

class Home extends React.Component {
  async componentDidMount () {
    await this.props.fetchPosts()
  }

  render () {
    const { loading, data } = this.props.posts

    return (
      <Layout>
        { (loading) ? <h3>Loading...</h3> : <PostList posts={data} /> }
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
