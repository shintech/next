import PropTypes from 'prop-types'
import Wrapper from './Wrapper'

const Post = ({ post }) => {
  let split = post.body.split('')

  return (
    <Wrapper>
      <h1>{post.title}</h1>
      <p><span className='stylized-letter'>{split[0]}</span>{split.slice(1)}</p>
      <aside>{post.summary}</aside>
    </Wrapper>
  )
}
/* -------------------------------------------------------------------------------- */

Post.propTypes = {
  post: PropTypes.object.isRequired
}

/* -------------------------------------------------------------------------------- */

export default Post
