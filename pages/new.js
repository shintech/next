/*  /pages/new.js
*/
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import actions from '../redux/actions'
import Layout from '../layouts/Main'
import Grid from '../layouts/Grid'

const NewPost = ({ createNewPost }) => {
  let _title, _body, _summary

  const submit = e => {
    e.preventDefault()

    let title = _title.value
    let body = _body.value
    let summary = _summary.value

    createNewPost({ title, body, summary })
  }

  /* eslint-disable */
  return (
    <Layout title='create new post'>
      <Grid>
        <form onSubmit={submit}>
          <ul className='form-style'>
            <li className='form-group'>
              <label>Title <span className='required'>*</span></label>
              <input ref={input => _title = input} type='text' placeholder='Enter a title....' />
            </li>

            <li className='form-group'>
              <label>Body <span className='required'>*</span></label>
              <input ref={input => _summary = input} type='textarea' placeholder='Headline....' />
            </li>            

            <li className='form-group'>
              <label>Body <span className='required'>*</span></label>
              <input ref={input => _body = input} type='textarea' placeholder='Body....' />
            </li>            
            
            <li>
              <button type='button' className='close'>Close</button>
              <button type='submit' className='submit'>Submit</button>
            </li>
          </ul>
        </form>
      </Grid>
    </Layout>
  )
 /* eslint-enable */
}

/* -------------------------------------------------------------------------------- */

NewPost.propTypes = {
  createNewPost: PropTypes.func.isRequired
}

/* -------------------------------------------------------------------------------- */

export default connect(
  state => ({
    state
  }),

  dispatch => ({
    createNewPost: (attrs) => {
      dispatch(actions.posts.addPost(attrs))
    }
  })
)(NewPost)
