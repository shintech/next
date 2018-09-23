/*   /components/Flex/index.js
*/
import { range } from '../../../lib'
import Wrapper from './Wrapper'

const Flex = () =>
  <Wrapper>
    {range(0, 35).map(f => {
      return <a key={f} href='#' onClick={e => { e.preventDefault() }} />
    })}
  </Wrapper>

export default Flex
