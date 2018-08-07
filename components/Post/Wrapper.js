import styled from 'styled-components'

const Wrapper = styled.article`
  display: grid;
  grid-gap: 5px;
  margin: 0;
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
    color: #222;
    line-height: 2.5ch;
  }
  
  aside {
    margin-top: 15px;
    grid-row: 2;  
    grid-column: 2;  
    border: 1px solid teal;
    padding: 1ch;
    font-family: "Times New Roman", Times, serif;
   
    :hover {
      color: indianred;
      cursor: default;
    }
  }
  
  p {
    padding: 0 2ch 0 2ch;
    grid-row: span 2;  
    grid-column: 1;    
    font-family: "curier new", courier, monospace;

  }
`

export default Wrapper
