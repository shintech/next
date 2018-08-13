/*   /components/Grid/Wrapper.js
*/
import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: [start row-1] 1fr [row-2] 1fr [row-3] 1fr [row-4] 1fr [stop end];
  grid-template-columns:  [start col-1] 1fr [col-2]  1fr [col-3]  1fr [col-4] 1fr [stop end last];

  min-height: 12ch;
  padding: 1ch;
  
  div {
    text-align: center;
    :hover {
      border: 3px solid white;
      cursor: default;
    }
  }
  
  .div-1 {
    grid-row: start / span end;
    grid-column: col-4 / last;
    background-color: red;
  }
  
  
  .div-2 {
    grid-row: row-2 / span end;
    grid-column: col-3;
    background-color: blue;
  }
  
  
  .div-3 {
    grid-row: row-3 / span end;
    grid-column: col-2;
    background-color: green;
  }  
  
  .div-4 {
    grid-row: row-4;
    grid-column: start;
    background-color: orange;
  }    
`
export default Wrapper
