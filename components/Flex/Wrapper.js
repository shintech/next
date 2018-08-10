/*   /components/Flex/Wrapper.js
*/

import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: inline;
      flex-wrap: wrap;

  a {
    margin 5px;
    height: 3ch;
    width: 2.06ch;
    padding: 5px 15px;
    background-color: lightgrey;
    text-decoration: none;
    text-align: center;
    
  }
  
  a:hover, a:focus, a:active {
    background-color: #aaa;
    color: white;
    cursor: pointer;
  }
  
  a:nth-child(2n + 1) {
    background-color: steelblue;
    color: white;
    
    :hover :focus :active {
      background-color: green;
    }
  }
`

export default Wrapper
