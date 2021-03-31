import React from 'react';
import QueueControls from './QueueControls';
import Visualize from '../../../util/Visualize';
import Square from '../../../util/Square';
import Group from '../../../util/Group';
import LetterBox from '../../../util/LetterBox';
import Rectangle from '../../../util/Rectangle';
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
    this.svgWidth = 100;
    this.svgHeight = 350;
    this.boxes = [];
  }

  componentDidMount() {
    const bounds = this.svg.current.getBoundingClientRect();
    this.svgWidth = bounds.width;
    const queueWidth = this.svgWidth - 100;
    const position = {
      x: 0,
      y: 0
    };
    const qRect = new Rectangle(
      { x: 50, y: 150 },
      'pink',
      queueWidth,
      150
    );
    this.svg.current.append(qRect.element);
    let initial = this.state.queue;
    for (let i = 0; i < initial.length; i++) {
      let box = this.addBlock(initial[i], i);
      this.boxes.push(box);
    }
  }

  enqueue() {
    this.setState((prevState) => {
      let nextLetter = this.ALPHABET[prevState.nextLetterIndex % 26];
      let block = this.addBlock(nextLetter, prevState.queue.length);
      this.boxes.push(block);
      let updated = [...prevState.queue, nextLetter];
      return {
        queue: updated,
        nextLetterIndex: prevState.nextLetterIndex + 1
      };
    })
  }

  addBlock(letter, index) {
    const position = {
      x: this.svgWidth - 50,
      y: 100
    };
    const box = new LetterBox(position).setLabel(letter);
    this.svg.current.append(box.group);
    setTimeout(() => {
      box.moveTo({
        x: (index + 1) * 100,
        y: 200
      });
    });
    return box;
  }

  removeHead(callback) {
    let firstNode = this.boxes.shift();
    firstNode.moveTo({
      x: 100,
      y: 25
    }).group.addEventListener('transitionend', () => {
      console.log('transitionend');
      callback(firstNode);
    });
  }

  dequeue() {
    this.setState((prevState) => {
      const updated = prevState.queue.slice(1);
      return {
        queue: updated
      };
    });
    this.removeHead((letterBox) => {
      letterBox.group.remove();
      this.moveElementsForwards();
    });
  }

  moveElementsForwards() {
    console.log(this.boxes);
    for (let i = 0; i < this.boxes.length; i++) {
      this.boxes[i].moveLeft();
    }
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
