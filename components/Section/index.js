import Wrapper from './Wrapper'

const Section = ({ title, list, links, references, text }) => {
  let retval = function () {
    if (text) return <li>{text}</li>
    if (list) return list.map((e, v) => <li key={v}>{e}</li>)
    if (links) return links.map((link, v) => <li key={v} ><strong>{link.title}</strong>: {link.details}</li>)
    if (references) return references.map((ref, v) => <li key={v}><a href={ref.url}>{ref.title}</a></li>)
  }

  return (
    <Wrapper>
      <figcaption>{ title }</figcaption>

      <ul>
        {retval()}
      </ul>

      <hr />
    </Wrapper>)
}
export default Section
