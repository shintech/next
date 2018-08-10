/*   /components/PostList/index.js
*/
import { Link } from 'routes'
import PropTypes from 'prop-types'
import Wrapper from './Wrapper'

const PostList = ({ posts }) =>
  <Wrapper>
    {posts.map(post =>
      <li key={post.id}>
        <Link route='post' params={{ slug: post.id }}>
          <a>
            <h3>{post.title}</h3>
            <div>{post.short}</div>
          </a>
        </Link>
      </li>
    )}
  </Wrapper>

/* -------------------------------------------------------------------------------- */

PostList.propTypes = {
  posts: PropTypes.array.isRequired
}

/* -------------------------------------------------------------------------------- */

export default PostList
