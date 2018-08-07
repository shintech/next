import PropTypes from 'prop-types'
import Wrapper from './Wrapper'

const Post = ({ post }) =>
  <Wrapper>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
    <aside>{post.short}</aside>
  </Wrapper>

/* -------------------------------------------------------------------------------- */

Post.propTypes = {
  post: PropTypes.object.isRequired
}

/* -------------------------------------------------------------------------------- */

export default Post
