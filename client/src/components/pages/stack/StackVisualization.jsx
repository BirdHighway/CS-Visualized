import React from 'react';

class StackVisualization extends React.Component {

  constructor(props) {
    super(props);
    this.refSVG = React.createRef();
  }

  componentDidMount() {
    const rect = this.refSVG.current.getBoundingClientRect();
    this.props.initialize();
  }

  render() {
    return (
      <svg id='svg-stack' ref={this.refSVG} />
    );
  }

}

export default StackVisualization;
