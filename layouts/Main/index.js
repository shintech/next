/*  /layouts/Main/index.js
*/
import Head from 'next/head'
import Wrapper from './Wrapper'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Modal from '../../components/Modal'
import { withRouter } from 'next/router'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const host = publicRuntimeConfig.hostname

const Main = ({ children, title = 'Main Layout', router }) =>
  <Wrapper>
    <Head>
      <title>{ title } | {host} </title>
      <link rel='icon' type='image/png' href='/public/images/favicon.png' />
    </Head>
    <header>
      <Nav pathname={router.asPath} />
    </header>

    <main>
      { children }

      <Modal />
    </main>

    <Footer>
      <img src='/public/images/react.svg' width='25px' height='25px' />
      <a href='#'>
        <i className='far fa-copyright' />
        shintech.ninja
      </a>
    </Footer>
  </Wrapper>

export default withRouter(Main)
