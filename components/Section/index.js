import PropTypes from 'prop-types'
import Wrapper from './Wrapper'

const Section = ({ title, list, links, references, text }) => {
  let retval = function () {
    if (text) return <p>{text}</p>
    if (list) return <ul>{list.map((e, v) => <li key={v}>{e}</li>)}</ul>
    if (links) return <ul>{links.map((link, v) => <li key={v} ><strong>{link.title}</strong>: {link.details}</li>)}</ul>
    if (references) return <ul>{references.map((ref, v) => <li key={v}><a href={ref.url}>{ref.title}</a></li>)}</ul>
  }

  return (
    <Wrapper>
      <figcaption>{ title }</figcaption>
      {retval()}

      <hr />
    </Wrapper>
  )
}

/* -------------------------------------------------------------------------------- */

Section.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array,
  links: PropTypes.array,
  references: PropTypes.array,
  text: PropTypes.string
}

/* -------------------------------------------------------------------------------- */

export default Section
