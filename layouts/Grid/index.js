import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;  
  grid-gap: 1ch;
  
  ul {
    list-style: none;
    padding-left: 0px;
  }
  
  padding-top: 1rem;
  max-width: 93%;
  margin: 0 auto;

  @media (max-width: 750px) {
    width: 100%;
    padding: 1rem;
  }

  h1 {
    color: #222;
    font-weight: bold;
    font-size: 1.75rem;
    line-height: 35px;
    font-family: "PT Sans", sans-serif;
    text-transform: capitalize;
    margin: 0;
  }

  p {
    line-height: 28px;
    color: #666;
    font-family: "PT Sans", sans-serif;
  }  
`

export default Grid
