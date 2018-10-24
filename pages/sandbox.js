import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import getConfig from 'next/config'
import Layout from '../layouts/Main'
import Grid from '../layouts/Grid'
import Section from '../layouts/Section'
import BarGraph from '../components/sandbox/BarGraph'
import Flex from '../components/sandbox/Flex'
import GridComponent from '../components/sandbox/Grid'
import Menu from '../components/sandbox/Menu'
import { increment, changeMenuValue } from '../redux/actions/sandbox'

// const { publicRuntimeConfig } = getConfig()
// const host = publicRuntimeConfig.hostname

const Sandbox = ({ changeMenuValue, increment, sandbox }) =>
  <Layout title='sandbox'>
    <Grid>
      <Section title='Redux INCREMENT'>
        <hr />
        <p>{ sandbox.value }</p>
        <hr />
        <button onClick={() => { increment() }}>Click</button>
      </Section>

      <Section title='Bar Graph'>
        <BarGraph />
      </Section>

      <Section title='Placeholder'>
        <div />
      </Section>

      <Section title='CSS FlexBox'>
        <Flex />
      </Section>

      <Section title='CSS Grid'>
        <GridComponent />
      </Section>

      <Section title='Menu'>
        <Menu data={sandbox.menuData} menu={sandbox.menu} onClick={changeMenuValue} />
      </Section>
    </Grid>
  </Layout>

/* -------------------------------------------------------------------------------- */

Sandbox.getInitialProps = ({ store, isServer, pathname, query }) => ({ })

/* -------------------------------------------------------------------------------- */

Sandbox.propTypes = {
  increment: PropTypes.func.isRequired,
  changeMenuValue: PropTypes.func.isRequired,
  sandbox: PropTypes.object.isRequired
}

/* -------------------------------------------------------------------------------- */

function mapStateToProps (state) {
  return state
}

function mapDispatchToProps (dispatch) {
  return {
    increment: () => {
      dispatch(increment(1))
    },

    changeMenuValue: (value) => {
      dispatch(changeMenuValue(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sandbox)
