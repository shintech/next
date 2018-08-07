import Link from 'next/link'
import Wrapper from './Wrapper'

const Nav = ({ pathname }) =>
  <Wrapper>
    <Link href='/'><a className={!pathname || pathname === '/' || pathname === '' ? 'active' : null}>home</a></Link>
    <Link href='/about'><a className={pathname === '/about' ? 'active' : null}>about</a></Link>
    <Link href='/contact'><a className={pathname === '/contact' ? 'active' : null}>contact</a></Link>
    <Link href='/sandbox'><a className='sandbox'>sandbox</a></Link>
  </Wrapper>

export default Nav
