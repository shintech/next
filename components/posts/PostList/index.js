import { Link } from 'routes'
import PropTypes from 'prop-types'
import Wrapper from './Wrapper'

const PostList = ({ posts }) =>
  <Wrapper>
    {(posts.error) ? <h3>Error loading posts... </h3>
      : posts.data.map(post =>
        <li key={post._id}>
          <Link route='post' params={{ slug: post._id }}>
            <a>
              <h3>{post.title}</h3>
              <div>{post.summary}</div>
            </a>
          </Link>
        </li>
      )}
  </Wrapper>

/* -------------------------------------------------------------------------------- */

PostList.propTypes = {
  posts: PropTypes.object.isRequired
}

/* -------------------------------------------------------------------------------- */

export default PostList
