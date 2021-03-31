import React from 'react';
import QueueControls from './QueueControls';
import Visualize from '../../../util/Visualize';
import Square from '../../../util/Square';
import Group from '../../../util/Group';
import LetterBox from '../../../util/LetterBox';
import QueueContents from './QueueContents';

class QueueVisualization extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      queue: ['A', 'B', 'C'],
      nextLetterIndex: 3
    }
    this.ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    this.svg = React.createRef();
    this.enqueue = this.enqueue.bind(this);
    this.dequeue = this.dequeue.bind(this);
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
      let nextLetter = this.ALPHABET[prevState.nextLetterIndex % 26];
      let updated = [...prevState.queue, nextLetter];
      return {
        queue: updated,
        nextLetterIndex: prevState.nextLetterIndex + 1
      };
    })
  }

  dequeue() {
    this.setState((prevState) => {
      const updated = prevState.queue.slice(1);
      return {
        queue: updated
      };
    });
  }

  render() {
    const queueContents = this.state.queue;
    return (
      <React.Fragment>
        <QueueContents array={queueContents} />
        <svg id='queue-visualization' ref={this.svg} height={'500'}/>
        <QueueControls
          enqueue={this.enqueue}
          dequeue={this.dequeue}
          allowEnqueue={this.state.queue.length < 10}
          allowDequeue={this.state.queue.length > 0} />
      </React.Fragment>
    );
  }
}

export default QueueVisualization;
