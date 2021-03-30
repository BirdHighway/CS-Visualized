import React from 'react';
import * as d3 from 'd3';
// import { useD3 } from '../../../hooks/useD3';

class StackVisualization extends React.Component {

  constructor(props) {
    super(props);
    this.refSVG = React.createRef();
  }

  componentDidMount() {
    console.log(this.refSVG);
    d3.select(this.refSVG.current)
      .append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 200)
      .attr('height', 300)
      .attr('fill', 'orange');
  }

  render() {
    return (
      <div>
        <svg ref={this.refSVG} />
      </div>
    );
  }

}

export default StackVisualization;
