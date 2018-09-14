import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import actions from '../redux/actions'
import { getPosts } from '../api/posts'
import Layout from '../layouts/Main'
import PostList from '../components/PostList'

const Home = ({ data }) =>
  <Layout title='home'>
    <PostList posts={data} />
  </Layout>

/* -------------------------------------------------------------------------------- */

Home.getInitialProps = async ({ store, isServer, pathname, query }) => {
  let data

  try {
    let res = await getPosts()
    data = await res.json()
  } catch (err) {
    data = err.error
  }

  return { data }
}

/* -------------------------------------------------------------------------------- */

Home.propTypes = {
  posts: PropTypes.object.isRequired
}

/* -------------------------------------------------------------------------------- */

export default connect(
  state => state,

  dispatch => ({
    fetchPosts: () => {
      dispatch(actions.posts.fetchPosts())
    }
  })
)(Home)
