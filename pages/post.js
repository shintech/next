import PropTypes from 'prop-types'
import Layout from '../layouts/Main'
import Page from '../layouts/Page'
import { getPost } from '../api/posts'
import Post from '../components/Post'

/* -------------------------------------------------------------------------------- */

const PostPage = ({ post }) =>
  <Layout>
    <Page>
      <Post post={post} />
    </Page>
  </Layout>

/* -------------------------------------------------------------------------------- */

PostPage.getInitialProps = async ({ query, store }) => {
  let post

  if (store.getState().posts.data) {
    post = store.getState().posts.data.find(e => e.id === parseInt(query.slug))
  } else {
    let res = await getPost(query.slug)
    post = await res.json()
  }

  return { post }
}

/* -------------------------------------------------------------------------------- */

PostPage.propTypes = {
  post: PropTypes.object.isRequired
}

/* -------------------------------------------------------------------------------- */

export default PostPage
