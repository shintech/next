/*   /components/Footer/index.js
*/
import styled from 'styled-components'

const Footer = styled.footer`
  display: flex;
  
  border-radius: 10px;
  background: pink;
  
  a {
    margin-left: auto;
    color: black;
    line-height: 35px;
    text-decoration: none;
    padding-right: 1ch;

    i {
      margin-right: 4px;
    }
  }

  img {
    margin-bottom: 0;
    padding: 2px 0 0 3px ;
  }
`

export default Footer
