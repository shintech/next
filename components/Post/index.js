import { Link } from 'routes'
import Wrapper from './Wrapper'

const PostItem = ({ post }) => (
  <Wrapper>
    <Link route='post' params={{ slug: post.id }}>
      <a>
        <h3>{post.title}</h3>
        <p>{post.short}</p>
      </a>
    </Link>
  </Wrapper>
)

export default PostItem
