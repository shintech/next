import { connect } from 'react-redux'
import getConfig from 'next/config'
import PropTypes from 'prop-types'
import { posts as api } from '../api'
import Layout from '../layouts/Main'
import PostList from '../components/posts/PostList'
import { fetchPosts } from '../redux/actions/posts'

const { publicRuntimeConfig } = getConfig()
const host = publicRuntimeConfig.hostname

const HomePage = ({ posts }) =>
  <Layout title='home'>
    <PostList posts={posts} />
  </Layout>

HomePage.getInitialProps = async ({ store, isServer, pathname, query }) => {
  let json

  try {
    let data = await api.getPosts(host)
    json = await data.json()
  } catch (err) {
    json = err
  }

  store.dispatch(fetchPosts(json))

  return { custom: 'custom' }
}

HomePage.propTypes = {
  posts: PropTypes.array.isRequired
}

function mapStateToProps (state) {
  return state
}

function mapDispatchToProps (dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
