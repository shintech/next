import styled from 'styled-components'

const Wrapper = styled.ul`
  margin: 0;

  li {
    border-bottom: 1px solid #ddd;
    overflow: hidden;   
    white-space: nowrap;
    height: 9ch;
    border-radius: 10px;
    
    :hover {
      background: #F5F5F5;
      border: 1px dotted gold;

      .heading { color: #387EF5 }
    }   
  }
  
  a {
    text-decoration: none;
    height: 100%;
    width: 100%;
    display: block;
    padding: 15px;
  }
  
  div {
    padding-right: 25px;
    font-size: 1.2rem;
    line-height: 4ch;
    color: #444;
    font-family: "PT Serif", sans-serif;
    height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }  
  
  h3 {
    width: 95%;
    margin: 0px;
    color: #222;
    font-family: "PT Sans", sans-serif;,
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;    
  }
`

export default Wrapper
