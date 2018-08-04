import Layout from '../layouts/Main'
import Page from '../layouts/Page'
import { getPost } from '../api/posts'

/* -------------------------------------------------------------------------------- */

const PostPage = ({ post }) =>
  <Layout>
    <Page>
      <hr />
      <h1>
        {post.title}
      </h1>
      <h3>
        {post.short}
      </h3>
      <p>
        {post.body}
      </p>
    </Page>
  </Layout>

PostPage.getInitialProps = async ({ query, reduxStore }) => {
  let post

  if (reduxStore.getState().posts.data) {
    post = reduxStore.getState().posts.data.find(e => e.id === parseInt(query.slug))
  } else {
    let res = await getPost(query.slug)
    post = await res.json()
  }

  return { post }
}

export default PostPage
