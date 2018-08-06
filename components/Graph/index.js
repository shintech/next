import * as d3 from 'd3'

const Graph = () => {
  return (
    <div>
      <button onClick={onClick}>Click</button>
    </div>
  )
}

function onClick () {
  d3.selectAll('main').style('background-color', 'red')
}

export default Graph
