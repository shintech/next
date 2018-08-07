import styled from 'styled-components'

const Wrapper = styled.nav`
  display: flex;
  align-items: center;  
  background: purple;
  border-radius: 5px;
  list-style-type: none;
  overflow: hidden;

  a {
    line-height: 4.5ch;
    text-align: center;
    width: 6ch;
    padding-left: 2ch;
    padding-right: 2ch;
    color: #FFF;
    text-decoration: none;
 }
  
  a:hover {
    background-color: violet;
    color: black
  }
  
  .sandbox {
    margin-left: auto;
    padding-right: 3ch;
  }
  
  .active {
    background-color: teal;
      color: white;
    
    :hover {
      background-color: steelblue;
      cursor: default;
      color: black
    }  
  }
`

export default Wrapper
