import styled from 'styled-components'

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: [start row-1] 1fr [row-2] 3fr [stop end];
    grid-template-columns:  [start col-1] 1fr [stop end last];
    grid-gap: 0;
    margin 1ch;
    
    ul {
      margin: 0;
      grid-row: 1;
      grid-columns: 1;
      display: flex;

      li { 
        padding: 1ch 0 1ch 0;
        flex-grow: 1;
        text-align: center;
        background-color: green;
        border: 1px solid black;
        :hover {
          cursor: pointer;
          background-color: pink;
          border: 1px solid red;
        }
      }
    }

    .hidden {
      grid-row: row-2 / span stop;
      background-color: white;
      cursor: default;
      display: flex;
      align-items: center;
      justify-content: center;
      border-color: black;
      border-width: 0 1px 1px;
      border-style: solid;
    }
    
    .modal {
      background-color: white;
      margin: 0;
      padding 2ch;
    }
`

export default Wrapper
