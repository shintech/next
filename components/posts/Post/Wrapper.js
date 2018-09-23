/*  /components/Post/Wrapper.js
*/
import styled from 'styled-components'

const Wrapper = styled.article`
  display: grid;
  grid-gap: 5px;
  
  grid-template-columns: 60% auto;
  grid-template-rows: auto auto;
  
  h1 {
    font-family: "Times New Roman", Times, serif;
    grid-row: 1;  
    grid-column: span 2;
    border-bottom: 4px dotted teal;
    padding-left: 8px;
    border-radius: 5px;
    font-weight: bold;  
    color: sienna;
    line-height: 2.5ch;
  }
  
  aside {
    grid-row: 2;  
    grid-column: 2; 
    
    margin: 1ch;
    padding: 1ch;

    border: 1px solid teal;
    color: midnightblue;
    font-family: 'Esteban', serif;
    font-size: 19px;
    
    :hover {
      color: indianred;
      cursor: default;
    };
  }
  
  p {
    grid-row: span 2;  
    grid-column: 1;  
    
    margin: 1ch;
    
    font-family: 'Farsan', cursive;
    font-size: 19px;

    .stylized-letter {
      color: salmon;
      font-family: 'Rouge Script', cursive;
      font-size: 45px;
    };    
  }
`

export default Wrapper
