import styled from 'styled-components'

const Wrapper = styled.li`
  border-bottom: 1px solid #ddd;
  height: 12ch;
  border-radius: 10px;
  overflow: hidden;
  
  :hover {
    background: #F5F5F5;
    border: 1px dotted gold;

    h3 { color: #387EF5 }
  }
  
  a {
    padding: 15px;
    text-decoration: none;
    display: block;
  }

  h3 {
    color: #222;
    font-weight: bold;
    font-size: 1.75rem;
    line-height: 35px;
    font-family: "PT Sans", sans-serif;
    text-transform: capitalize;
    margin: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;    
  }

  p {
    font-size: 1.2rem;
    line-height: 35px;
    color: #444;
    font-family: "PT Serif", sans-serif;
    height: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export default Wrapper
