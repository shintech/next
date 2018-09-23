/*   /components/PostList/index.js
*/
import { connect } from 'react-redux'
import { Link } from 'routes'
import PropTypes from 'prop-types'
import action from '../../../redux/actions'
import Wrapper from './Wrapper'

const PostList = ({ posts }) =>
  <Wrapper>
    {(posts.error) ? <h3>Error loading posts... </h3>
      : posts.map(post =>
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
  posts: PropTypes.array.isRequired
}

/* -------------------------------------------------------------------------------- */

export default connect(
  state => ({
    state
  }),

  dispatch => ({
    modal: (model) => {
      dispatch(action.modal.toggleModal())
    }
  })
)(PostList)
