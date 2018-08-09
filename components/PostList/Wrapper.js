import styled from 'styled-components'

const Wrapper = styled.ul`
  margin: 0;

  li {
    overflow: hidden;   
    white-space: nowrap;

    height: 9ch;

    border-bottom: 1px solid #ddd;
    border-radius: 10px;
    
    h3 {
      color: olive;
    }
    
    :hover {
      background: #F5F5F5;
      border: 1px dotted gold;

      h3 { color: orange }
    }   
  }
  
  a {
    display: block;
    text-decoration: none;
  
    height: 100%;
    width: 100%;
    padding: 15px;
  }
  
  div {
    overflow: hidden;
    text-overflow: ellipsis;
    
    height: 100%;
    padding-right: 25px;
    
    color: #444;

    font-family: "PT Serif", sans-serif;
    font-size: 1.2rem;    
    line-height: 4ch;
  }  
  
  h3 {
    overflow: hidden;
    text-overflow: ellipsis;  
    white-space: nowrap;

    margin: 0;
    width: 95%;
    
    color: #222;

    font-family: "PT Sans", sans-serif;,
  }
`

export default Wrapper
