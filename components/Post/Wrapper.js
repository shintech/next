import styled from 'styled-components'

const Wrapper = styled.article`
  display: grid;
  grid-gap: 5px;
  margin: 0;
  grid-template-columns: 60% auto;
  grid-template-rows: auto auto;
  
  h1 {
    grid-row: 1;  
    grid-column: span 2;
    border-bottom: 4px dotted teal;
    padding-left: 8px;
    border-radius: 5px;
    font-weight: bold;  
    color: #222;
    line-height: 2.5ch;
    font-family: "PT Sans", sans-serif;
  }
  
  aside {
    margin-top: 15px;
    grid-row: 2;  
    grid-column: 2;  
    font-family: "PT Serif", sans-serif;
    border: 1px solid teal;
    padding: 1ch;
    
    :hover {
      color: darkslategray;
      cursor: default;
    }
  }
  
  p {
    padding: 0 2ch 0 2ch;
    color: #444;
    grid-row: span 2;  
    grid-column: 1;      
  }
`

export default Wrapper
