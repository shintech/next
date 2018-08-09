import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import action from '../actions'
import Layout from '../layouts/Main'
import Page from '../layouts/Page'
import Graph from '../components/Graph'
import Figure from '../components/Figure'

const Sandbox = ({ value, increment, fetchGraph, sendFile, pathname }) => {
  let _file

  const submit = (e) => {
    e.preventDefault()

    let file = _file

    sendFile(file)
  }

  /* eslint-disable */
  return (
    <Layout pathname={pathname}>
      <Page>
        <Figure title='INCREMENT'>
          <p>{ value }</p>
          <button onClick={() => { increment() }}>Click</button>
          <hr />
        </Figure>

        <Figure title='Graphs'>
          <Graph onload={fetchGraph} />
          <hr />
        </Figure>

        <Figure title='Files'>
          <hr />

          <form onSubmit={submit}>
            <input ref={input => _file = input} type='file' name='file' /> 
            <br />
            <input type='submit' value='Submit' />
          </form>

          <hr />
        </Figure>
      </Page>
    </Layout>
  )
  /* eslint-enable */
}
/* -------------------------------------------------------------------------------- */

Sandbox.getInitialProps = ({ pathname }) => ({ pathname })

/* -------------------------------------------------------------------------------- */

Sandbox.propTypes = {
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired
}

/* -------------------------------------------------------------------------------- */

export default connect(
  state => ({
    value: state.sandbox.value
  }),

  dispatch => ({
    increment: () => {
      dispatch(action.sandbox.increment())
    },

    fetchGraph: () => {
      dispatch(action.sandbox.fetchGraph())
    },

    sendFile: (file) => {
      dispatch(action.sandbox.sendFile(file))
    }
  })
)(Sandbox)
