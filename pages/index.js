import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import action from '../actions'
import Layout from '../layouts/Main'
import Page from '../layouts/Page'
import PostList from '../components/PostList'
import Loading from '../components/Loading'

class Home extends React.Component {
  async componentDidMount () {
    await this.props.fetchPosts()
  }

  render () {
    const { loading, data } = this.props.posts

    return (
      <Layout pathname={this.props.pathname}>
        <Page>
          { (loading) ? <Loading /> : <PostList posts={data} /> }
        </Page>
      </Layout>
    )
  }
}

/* -------------------------------------------------------------------------------- */

Home.getInitialProps = ({store, isServer, pathname, query}) => ({ pathname })

/* -------------------------------------------------------------------------------- */

Home.propTypes = {
  posts: PropTypes.object.isRequired
}

/* -------------------------------------------------------------------------------- */

export default connect(
  state => state,

  dispatch => ({
    fetchPosts: () => {
      dispatch(action.posts.fetchPosts())
    }
  })
)(Home)
