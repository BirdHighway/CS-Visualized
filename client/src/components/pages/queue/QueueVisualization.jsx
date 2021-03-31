import React from 'react';
import QueueControls from './QueueControls';
import Visualize from '../../../util/Visualize';
import Square from '../../../util/Square';

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
    const position = {
      x: 10,
      y: 10
    };
    const square = new Square(position, 'red', 50);
    this.svg.current.appendChild(square.element);

    setTimeout(() => {
      const newPosition = {
        x: 150,
        y: 300
      };
      square.moveTo(newPosition);
    }, 1000);
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
