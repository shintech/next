import styled from 'styled-components'

const Wrapper = styled.section`
  grid-column: 2;
  overflow: hidden;
  
  background-color: lavender;
  border: 1px black solid;
  border-radius: 5px;
  
  ul {
    list-style: none;
    margin: 1ch 0;
   
    li {
      padding-left: 1ch;
    }    
  }

  p {
    padding-left: 1ch;
    margin: 1ch 0;
  }
  
  h2 {
    margin: 0;

    padding-left: 1ch;

    font-family: "PT Sans", sans-serif;
    font-size: 1.17em;
    line-height: 2.5ch;

    color: #222;
    border-bottom: 1px dotted black;
    background-color: lightgreen;
  }
  
  h3 {
    padding-left: 1ch;
    font-size: 1em;
  }
  
  button, 
  input[type='submit'],
  input[type='file'] {
    cursor: pointer;
  }
  
  :hover {
  background-color: thistle;
    h2 {
      background-color: mediumseagreen;
    }
  }
    
  :nth-child(2n + 1) {
    grid-column: 1;
    
    background-color: powderblue;
   
    :hover {
      background-color:lightsteelblue;

      h2 {
        background-color: steelblue;
      }
    }
    
    h2 {
      background-color: lightsteelblue;
    }    
  }
`

export default Wrapper
