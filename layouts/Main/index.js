/*  /layouts/Main/index.js
*/
import Head from 'next/head'
import Wrapper from './Wrapper'
import Nav from '../../components/Nav'
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
    </main>

    <Footer>
      <a href='#'>shintech</a>
    </Footer>
  </Wrapper>

export default Main
