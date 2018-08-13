/*   /components/Grid/Wrapper.js
*/
import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: [start row-1] 1fr [row-2] 3fr [row-3] 1fr [stop end];
  grid-template-columns:  [start col-1] 3fr [col-2] 5fr [col-3] 5fr [col-4] 2fr [stop end last];
  min-height: 16ch;
  padding: 1ch;
  div {
    text-align: center;

    :hover {
      border: 3px solid white;
      cursor: default;
    }
  }
  
  .div-1 {
    grid-row: row-1;
    grid-column: start / span last;
    background-color: red;
  }
  
  
  .div-2 {
    grid-row: row-2 / row-3;
    grid-column: col-1;
    background-color: blue;
  }
  
  
  .div-3 {
    grid-row: row-2 / row-3;
    grid-column: col-2 / col-4;
    background-color: green;
  }  
  
  .div-4 {
    grid-row: row-2 / row-3;
    grid-column: col-4;
    background-color: orange;
  }

  .div-5 {
    grid-row: row-3;
    grid-column: start / span last;
    background-color: purple;
  }      
`
export default Wrapper
