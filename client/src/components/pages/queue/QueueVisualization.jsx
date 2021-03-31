import React from 'react';
import QueueControls from './QueueControls';

class QueueVisualization extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      valueToAdd: '',
      queue: ['A']
    }
    this.svg = React.createRef();
    this.updateValueInput = this.updateValueInput.bind(this);
    this.enqueue = this.enqueue.bind(this);
  }

  componentDidMount() {
  }

  enqueue() {
    this.setState((prevState) => {
      let value = prevState.valueToAdd;
      let updated = [...prevState.queue, value];
      return {
        queue: updated,
        valueToAdd: ''
      };
    })
  }

  updateValueInput(value) {
    this.setState({
      valueToAdd: value
    });
  }

  dequeue() {

  }

  render() {
    return (
      <React.Fragment>
        <svg ref={this.svg} height={'500'}/>
        <QueueControls
          updateValue={this.updateValueInput}
          enqueue={this.enqueue}
          valueToAdd={this.state.valueToAdd} />
      </React.Fragment>
    );
  }
}

export default QueueVisualization;
