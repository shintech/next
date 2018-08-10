/*   /components/BarGraph/index.js
*/
import * as d3 from 'd3'
import Wrapper from './Wrapper'

class Graph extends React.Component {
  componentDidMount () {
    let data = [90, 34, 22, 64, 12]

    let width = 420
    let barHeight = 20

    let x = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([0, width])

    let chart = d3.select('svg')
      .attr('width', width)
      .attr('height', barHeight * data.length)

    let bar = chart.selectAll('g')
      .data(data)
      .enter().append('g')
      .attr('transform', function (d, i) { return 'translate(0,' + i * barHeight + ')' })

    bar.append('rect')
      .attr('width', x)
      .attr('height', barHeight - 1)

    bar.append('text')
      .attr('x', function (d) { return x(d) - 3 })
      .attr('y', barHeight / 2)
      .attr('dy', '.35em')
      .text(function (d) { return `\u00A0 ${d}` })
  }

  render () {
    return (
      <Wrapper>
        <svg width='100px' height='100px' />
      </Wrapper>
    )
  }
}

export default Graph
