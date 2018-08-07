import C from '../store/constants'

function increment () {
  return async dispatch => {
    dispatch({
      type: C.INCREMENT
    })
  }
}

function fetchGraph () {
  return async dispatch => {
    dispatch({
      type: C.FETCH_GRAPH
    })
  }
}

export default {
  increment,
  fetchGraph
}
