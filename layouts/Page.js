import styled from 'styled-components'

const Page = styled.div`
  ul {
    list-style: none;
    padding-left: 0px;
  }
  padding: 1rem;
  max-width: 90%;
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

export default Page
