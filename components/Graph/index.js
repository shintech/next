import * as d3 from 'd3'

const Graph = () => {
  return (
    <p onClick={onClick}>
     Click to turn red...
    </p>
  )
}
function onClick () {
  d3.selectAll('p').style('color', 'red')
}

export default Graph
