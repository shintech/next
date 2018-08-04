import { connect } from 'react-redux'
import action from '../actions'
import Layout from '../layouts/Main'
import Page from '../layouts/Page'

const NewPost = ({ createNewPost }) => {
  let _title, _short, _body

  const submit = e => {
    e.preventDefault()

    let title = _title.value
    let short = _short.value
    let body = _body.value

    createNewPost({ title, short, body })
  }

  /* eslint-disable */
  
  return (
    <Layout>
      <Page>
        <form onSubmit={submit}>
          <ul className='form-style'>
            <li className='form-group'>
              <label>Title <span className='required'>*</span></label>
              <input ref={input => _title = input} type='text' placeholder='Enter a title....' />
            </li>

            <li className='form-group'>
              <label>Short <span className='required'>*</span></label>
              <input ref={input => _short = input} type='textarea' placeholder='....' />
            </li>

            <li className='form-group'>
              <label>Body <span className='required'>*</span></label>
              <input ref={input => _body = input} type='textarea' placeholder='....' />
            </li>

            <li>
              <button type='button' className='close'>Close</button>
              <button type='submit' className='submit'>Submit</button>
            </li>
          </ul>
        </form>
      </Page>
    </Layout>
  )

 /* eslint-enable */
}

export default connect(
  state => ({
    state
  }),

  dispatch => ({
    createNewPost: (attrs, posts) => {
      dispatch(action.posts.add(attrs, posts))
    }
  })
)(NewPost)
