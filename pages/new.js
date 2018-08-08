import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import action from '../actions'
import Layout from '../layouts/Main'
import Page from '../layouts/Page'

const NewTask = ({ createNewTask }) => {
  let _title, _details

  const submit = e => {
    e.preventDefault()

    let title = _title.value
    let details = _details.value

    createNewTask({ title, details })
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
              <label>Details <span className='required'>*</span></label>
              <input ref={input => _details = input} type='textarea' placeholder='....' />
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

/* -------------------------------------------------------------------------------- */

NewTask.propTypes = {
  createNewTask: PropTypes.func.isRequired
}

/* -------------------------------------------------------------------------------- */

export default connect(
  state => ({
    state
  }),

  dispatch => ({
    createNewTask: (attrs) => {
      dispatch(action.about.addTask(attrs))
    }
  })
)(NewTask)
