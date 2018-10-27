import { connect } from 'react-redux'
import getConfig from 'next/config'
import PropTypes from 'prop-types'
import Layout from '../layouts/Main'
import Login from '../components/users/Auth'
import { authorize } from '../redux/actions/users'
import { users as api } from '../api'

const { publicRuntimeConfig } = getConfig()
const host = publicRuntimeConfig.hostname

const LoginPage = ({ login, users }) =>
  <Layout title='login'>
    <Login login={login} token={users.token} />
  </Layout>

LoginPage.getInitialProps = async ({ store, isServer, pathname, query }) => {
  return { custom: 'custom' }
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return state
}

function mapDispatchToProps (dispatch) {
  return {
    login: async (auth) => {
      let data = await api.login(auth.username, auth.password, host)
      let json = await data.json()

      dispatch(authorize(json.token, host))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
