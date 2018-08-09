import Wrapper from './Wrapper'

function range (start, end) {
  if (start === end) return [start]
  return [start, ...range(start + 1, end)]
}

const Flex = () =>
  <Wrapper>
    {range(0, 31).map(f => {
      return <a key={f} href='#' onClick={e => { e.preventDefault() }} />
    })}
  </Wrapper>

export default Flex
