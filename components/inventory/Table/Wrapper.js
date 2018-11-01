/*   /components/Nav/Wrapper.js
*/
import styled from 'styled-components'

const Wrapper = styled.table`
border: 1px solid black;
border-collapse: collapse;
width: 100%;
margin-top: 1ch;
td, th {
  border: 1px solid black;
  text-align: center;
}

thead tr {
  background-color: orange;
  color: black;
}

tbody tr:nth-child(2n + 2) {
  background-color: lightgreen;
}

tbody tr:hover {
  background-color: white;
  cursor: default;
}
`

export default Wrapper
