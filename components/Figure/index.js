import PropTypes from 'prop-types'
import Wrapper from './Wrapper'

const Figure = ({ title, children }) =>
  <Wrapper>
    <figcaption>{ title }</figcaption>
    {children}
  </Wrapper>

/* -------------------------------------------------------------------------------- */

Figure.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array,
  links: PropTypes.array,
  references: PropTypes.array,
  text: PropTypes.string
}

/* -------------------------------------------------------------------------------- */

export default Figure
