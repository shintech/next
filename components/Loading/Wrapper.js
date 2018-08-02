import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 auto;
  width: 0;
  padding-top: 20%;
  
  h3 {
    text-align: center;
  }
  
  div {
    display: inline-block;
    width: 64px;
    height: 64px;
  }
  
  div:after {
    content: " ";
    display: block;
    width: 56px;
    height: 56px;
    margin: 1px;
    border-radius: 58%;
    border: 2px solid #fff;
    border-color: purple transparent purple transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export default Wrapper
