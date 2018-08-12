/*   /components/Flex/Wrapper.js
*/
import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid: 1fr 1fr 1fr 1fr / 1fr 1fr 1fr 1fr;
  padding: 1ch;
  
  div {
    text-align: center;
  }
  
  .div-1 {
    grid-row: 1 / span 4;
    grid-column: 4;
    background-color: red;
  }
  
  
  .div-2 {
    grid-row: 2 / span 4;
    grid-column: 3;
    background-color: blue;
  }
  
  
  .div-3 {
    grid-row: 3 / span 4;
    grid-column: 2;
    background-color: green;
  }  
  
  .div-4 {
    grid-row: 4;
    grid-column: 1;
    background-color: orange;
  }    
`
export default Wrapper
