import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import getConfig from 'next/config'
import { posts as api } from '../api'
import Layout from '../layouts/Main'
import PostList from '../components/posts/PostList'
import { fetchPosts, getHomePageState } from '../redux/stores/posts'

const { publicRuntimeConfig } = getConfig()
const host = publicRuntimeConfig.hostname

const HomePage = ({ data }) =>
  <Layout title='home'>
    <PostList posts={data} />
  </Layout>

HomePage.getInitialProps = async ({ store, isServer, pathname, query }) => {
  let data = await api.getPosts(host)
  let json = await data.json()

  store.dispatch(fetchPosts(json))

  return { custom: 'custom' }
}

function mapStateToProps (state) {
  return getHomePageState(state)
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
