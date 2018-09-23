import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Layout from '../layouts/Main'
import Grid from '../layouts/Grid'
import Section from '../layouts/Section'
import BarGraph from '../components/sandbox/BarGraph'
import Flex from '../components/sandbox/Flex'
import GridComponent from '../components/sandbox/Grid'
import Menu from '../components/sandbox/Menu'
import {bindActionCreators} from 'redux'
import getConfig from 'next/config'
import { sandbox as api } from '../api'
import { getPageState, bumpIncrement, changeMenu, sendFileAction } from '../redux/stores/sandbox'

const { publicRuntimeConfig } = getConfig()
const host = publicRuntimeConfig.hostname

const Sandbox = ({ value, bumpIncrement, menu, menuData, changeMenu, sendFileAction }) => {
  let _file
  
  const submit = async (e) => {
    e.preventDefault()
    
    let file = _file

    try {
      let result = await api.sendFile(file, host)
      let payload = await result.json()
      
      sendFileAction(payload)
    } catch (err) {
      throw new Error(err.message)
    }    
  }
  
/* eslint-disable */
  return (
    <Layout title='sandbox'>
      <Grid>
        <Section title='Redux INCREMENT'>
          <hr />
          <p>{ value }</p>
          <hr />
          <button onClick={() => { bumpIncrement(1) }}>Click</button>
        </Section>

        <Section title='Bar Graph'>
          <BarGraph />
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
  bumpIncrement: PropTypes.func.isRequired
}

/* -------------------------------------------------------------------------------- */

function mapStateToProps (state) {
  return getPageState(state)
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ bumpIncrement, changeMenu, sendFileAction }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Sandbox)