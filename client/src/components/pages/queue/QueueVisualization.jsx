import React from 'react';
import QueueControls from './QueueControls';
import Visualize from '../../../util/Visualize';
import Square from '../../../util/Square';
import Group from '../../../util/Group';
import LetterBox from '../../../util/LetterBox';

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
      x: 0,
      y: 0
    };
    const g = new LetterBox(position)
      .setLabel('A');
    this.svg.current.append(g.group);
    setTimeout(() => {
      g.moveTo({
        x: 400,
        y: 200
      })
    }, 2000);
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
