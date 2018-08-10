import styled from 'styled-components'

const Wrapper = styled.div`
  .heading {
    text-align: center;
    color: steelblue;
  }
  
  .spinner {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .spinner:after {
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
