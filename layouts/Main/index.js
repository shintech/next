/*  /layouts/Main/index.js
*/
import Head from 'next/head'
import Wrapper from './Wrapper'
import Nav from '../../components/Nav'
import Modal from '../../components/Modal'
import Footer from '../../components/Footer'

const Main = ({ children, title = 'Default', pathname = '/' }) =>
  <Wrapper>
    <Head>
      <title>{ title }</title>
    </Head>
    <header>
      <Nav pathname={pathname} />
    </header>

    <main>
      { children }

      <Modal />
    </main>

    <Footer>
      <img src='/public/images/react.svg' width='35px' height='35px' /><a href='#'><i class='far fa-copyright' />shintech.ninja</a>
    </Footer>
  </Wrapper>

export default Main
