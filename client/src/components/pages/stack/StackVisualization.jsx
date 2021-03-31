import React from 'react';

class StackVisualization extends React.Component {

  constructor(props) {
    super(props);
    this.refSVG = React.createRef();
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <svg ref={this.refSVG} style={{
          width: '100%'
        }}/>
      </div>
    );
  }

}

export default StackVisualization;
