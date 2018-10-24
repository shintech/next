import { connect } from 'react-redux'
import getConfig from 'next/config'
import PropTypes from 'prop-types'
import { posts as api } from '../api'
import Layout from '../layouts/Main'
import Post from '../components/posts/Post'
import { fetchPost } from '../redux/actions/post'

const { publicRuntimeConfig } = getConfig()
const host = publicRuntimeConfig.hostname

const PostPage = ({ post }) =>
  <Layout title={post.data.title}>
    <Post post={post.data} />
  </Layout>

PostPage.getInitialProps = async ({ store, isServer, pathname, query }) => {
  let res = await api.getPost(query.slug, host)

  let json = await res.json()

  store.dispatch(fetchPost(json))

  return { custom: 'custom' }
}

PostPage.propTypes = {
  post: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return state
}

function mapDispatchToProps (dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)
