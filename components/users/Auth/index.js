import PropTypes from 'prop-types'
import Wrapper from './Wrapper'

const LoginForm = (props) => {
  let _username, _password
  const { login, token } = props

  const submit = e => {
    e.preventDefault()

    let username = _username.value
    let password = _password.value

    login({ username, password })
  }

  /* eslint-disable */

  return (
    <Wrapper>
      <div>{(token) ? <div>Authorized: <span className='true'>true</span></div>
        : <form onSubmit={submit}>
          <div>Authorized: <span className='false'>false</span></div>
          <ul className='form-style'>
            <li className='form-group'>
              <label>Username <span className='required'>*</span></label>
              <input ref={input => _username = input} type='text' placeholder='Username' required />
            </li>

            <li className='form-group'>
              <label>Password<span className='required'>*</span></label>
              <input ref={input => _password = input} type='password' placeholder='Password' required />
            </li>

            <li className='form-group'>
              <button type='submit' className='submit'>Submit</button>
            </li>
            <li />
          </ul>
        </form>
      }</div>
    </Wrapper>
  )
}

  /* eslint-enable */

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  token: PropTypes.node.isRequired
}

export default LoginForm
