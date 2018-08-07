import styled from 'styled-components'

const Wrapper = styled.figure`
  margin: 0;

  ul {
    list-style: none;
  }
  
  li, p {
    padding-left: 8px;
  }
  
  figcaption {
    border: 1px dotted black;
    font-size: 1.17em;
    padding-left: 8px;
    border-radius: 5px;
    font-weight: bold;  
    color: #222;
    line-height: 2.5ch;
    font-family: "PT Sans", sans-serif;
    background-color: lightgreen;
  }

`

export default Wrapper
