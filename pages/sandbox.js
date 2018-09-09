/*  /pages/sandbox.js
*/
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import action from '../redux/actions'
import Layout from '../layouts/Main'
import Grid from '../layouts/Grid'
import Section from '../layouts/Section'
import BarGraph from '../components/BarGraph'
import Flex from '../components/Flex'
import GridComponent from '../components/Grid'
import Menu from '../components/Menu'

const menuData = [1, 2, 3, 4]

const Sandbox = ({ value, increment, fetchGraph, sendFile, pathname, changeMenu, menu }) => {
  let _file

  const submit = (e) => {
    e.preventDefault()

    let file = _file

    sendFile(file)
  }

  /* eslint-disable */
  return (
    <Layout title='sandbox'>
      <Grid>
        <Section title='Redux INCREMENT'>
          <hr />
          <p>{ value }</p>
          <hr />
          <button onClick={() => { increment() }}>Click</button>
        </Section>

        <Section title='Bar Graph'>
          <BarGraph onload={fetchGraph} />
        </Section>

        <Section title='Upload File'>
          <form onSubmit={submit}>
            <hr />
            <input ref={input => _file = input} type='file' name='file' /> 
            <hr />
            <input type='submit' value='Submit' />
          </form>
        </Section>
        
        <Section title='CSS FlexBox'>
          <Flex />
        </Section>

        <Section title='CSS Grid'>
          <GridComponent />
        </Section>
        
        <Section title='Menu'>
          <Menu data={menuData} menu={menu} onClick={changeMenu} />
        </Section>        

      </Grid>
    </Layout>
  )
  /* eslint-enable */
}
/* -------------------------------------------------------------------------------- */

Sandbox.getInitialProps = ({ store, isServer, pathname, query }) => ({ })

/* -------------------------------------------------------------------------------- */

Sandbox.propTypes = {
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired
}

/* -------------------------------------------------------------------------------- */

export default connect(
  state => ({
    value: state.sandbox.value,
    menu: state.sandbox.menu
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
    },

    changeMenu: (option) => {
      dispatch(action.sandbox.changeMenu(option))
    }
  })
)(Sandbox)
