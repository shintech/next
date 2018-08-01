import Post from '../Post'
import Wrapper from './Wrapper'

const PostList = ({ posts }) =>
  <Wrapper>
    {posts.map(p => <Post key={p.title} post={p} />)}
  </Wrapper>

export default PostList
