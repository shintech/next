import Link from 'next/link'
import Wrapper from './Wrapper'

const Nav = () => (
  <Wrapper>
    <Link href='/'><a>home</a></Link> |
    <Link href='/about'><a>about</a></Link> |
    <Link href='/contact'><a>contact</a></Link>
    <Link href='/sandbox'><a className='sandbox'>sandbox</a></Link>
  </Wrapper>
)

export default Nav
