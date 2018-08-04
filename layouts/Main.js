import Head from 'next/head'
import Wrapper from './Wrapper'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default ({ children, title = 'Default' }) => (
  <Wrapper>
    <Head>
      <title>{ title }</title>
    </Head>
    <header>
      <Nav />
    </header>

    <main>
      { children }
    </main>

    <Footer>
      <a href='#'>shintech</a>
    </Footer>
  </Wrapper>
)
