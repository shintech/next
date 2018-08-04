import Link from 'next/link'
import Wrapper from './Wrapper'

const Nav = () => (
  <Wrapper>
    <Link href='/'><a>Home</a></Link> |
    <Link href='/about'><a>About</a></Link> |
    <Link href='/contact'><a>Contact</a></Link>
    <Link href='/sandbox'><a className='sandbox'>Sandbox</a></Link>
  </Wrapper>
)

export default Nav
