import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import getConfig from 'next/config'
import { posts as api } from '../api'
import Layout from '../layouts/Main'
import Post from '../components/posts/Post'
import { getPostPageState, fetchPost } from '../redux/stores/post'

const { publicRuntimeConfig } = getConfig()
const host = publicRuntimeConfig.hostname

const PostPage = ({ data }) =>
  <Layout title={data.title}>
    <Post post={data} />
  </Layout>

PostPage.getInitialProps = async ({ store, isServer, pathname, query }) => {
  let res = await api.getPost(query.slug, host)

  let json = await res.json()

  store.dispatch(fetchPost(json))

  return { custom: 'custom' }
}

function mapStateToProps (state) {
  return getPostPageState(state)
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchPost }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)
