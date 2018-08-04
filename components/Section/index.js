import Wrapper from './Wrapper'

const Section = ({ title, list, links, references, text }) => {
  let retval = function () {
    if (text) return <p>{text}</p>
    if (list) return list.map((e, v) => <li key={v}>{e}</li>)
    if (links) return links.map((link, v) => <li key={v} ><strong>{link.title}</strong>: {link.details}</li>)
    if (references) return references.map((ref, v) => <li key={v}><a href={ref.url}>{ref.title}</a></li>)
  }

  return (
    <Wrapper>
      <h3>{ title }</h3>
      {retval()}
      <div />
    </Wrapper>)
}
export default Section
