import { getPosts } from '../api/posts'
import Layout from '../layouts/Main'

import Post from '../components/Post'

const IndexPage = ({ posts }) =>
  <Layout>
    <ul>
      {posts.map(p => <Post key={p.title} post={p} />)}
    </ul>
  </Layout>

IndexPage.getInitialProps = async ({ req }) => {
  const res = await getPosts()
  const json = await res.json()
  return { posts: json }
}

export default IndexPage
