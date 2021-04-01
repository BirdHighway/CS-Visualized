import React from 'react';
import ArrayTable from '../../shared/ArrayTable';
import Group from '../../../util/Group';
import Rectangle from '../../../util/Rectangle';
import Author from '../../shared/Author';
import { hydeStephen } from '../../../authors';
import VideoElement from '../../shared/VideoElement';

class StackPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stack: [],
      description: 'This is a stack',
      indexLetter: 0,
      highlight: -1,
      disablePush: true,
      disablePop: true
    }
    this.refSVG = React.createRef();
    this.ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    this.descriptions = {
      initial: () => 'We start with an empty stack',
      addLetter: (letterName) => `The next item we will add is the letter ${letterName}`,
      movedToStack: (args) => `${args[0]}, at index ${args[1]}, is now at the top of the stack`,
      remove: (args) => `We always remove the item at the top of the stack.
        In this case it is ${args[0]} at index ${args[1]}`
    }
    this.start = {
      x: 20,
      y: 20
    };
    this.defaultPos = {
      x: 0,
      y: 0
    };
    this.stackOffset = 0;
    this.push = this.push.bind(this);
    this.doPush = this.doPush.bind(this);
    this.pop = this.pop.bind(this);
    this.doPop = this.doPop.bind(this);
  }

  componentDidMount() {
    console.log('cDM')
    const rect = this.refSVG.current.getBoundingClientRect();
    this.stackOffset = (rect.width - 200) / 2;
    this.initialize();
  }

  initialize() {
    console.log('initialize()');
    this.setDescription('initial', null, () => {
      console.log('initialize setDescription callback');
      this.push();
    });
  }

  setDescription(name, args, callback) {
    console.log('setDescription');
    this.setState((prevState) => {
      return {
        description: this.descriptions[name](args)
      };
    }, () => {
      console.log('set Disc callback');
      setTimeout(() => {
        console.log('setTimeout after setDescription')
        callback();
      }, 2000);
    });
  }

  setHighlight(index, callback) {
    this.setState(() => {
      return {
        highlight: index
      };
    }, () => {
      callback();
    });
  }

  push() {
    console.log('push');
    this.enableButtons(false);
    let nextLetter = this.ALPHABET[this.state.indexLetter];
    this.setDescription('addLetter', nextLetter, () => {
      this.doPush();
    });
  }

  doPush() {
    console.log('push()');
    this.setState((prevState) => {
      const stack = prevState.stack;
      const label = this.ALPHABET[prevState.indexLetter];
      const stackItem = new Group(this.start, label, 200, 50)
        .moveTo({ x: this.stackOffset, y: 20});
      const rect = new Rectangle(
        this.defaultPos,
        'yellow',
        200,
        50
      );
      stackItem.addShape(rect.element);
      this.refSVG.current.appendChild(stackItem.element);
      return {
        stack: [...stack, stackItem],
        indexLetter: prevState.indexLetter + 1
      }
    }, () => {
      this.moveToStack();
    });
  }

  pop() {
    console.log('pop');
    this.enableButtons(false);
    let index = this.state.stack.length - 1;
    let item = this.state.stack[index];
    let args = [item.label, index];
    this.setDescription('remove', args, () => {
      this.doPop();
    })
  }

  doPop() {
    console.log('doPop()');
    let popped;
    this.setState((prevState) => {
      popped = prevState.stack.pop();
      return {
        stack: [...prevState.stack]
      };
    }, () => {
      this.moveFromStack(popped);
    });
  }

  moveToStack() {
    setTimeout(() => {
      let count = this.state.stack.length;
      let item = this.state.stack[count - 1];
      let label = item.label;
      let newItemIndex = count - 1;
      let offset = (10 - count) * 60;
      item.moveTo({
        y: offset
      }, () => {
        this.setHighlight(newItemIndex, () => {
          this.enableButtons(true);
          this.setDescription('movedToStack', [label, newItemIndex], () => {
          });
        });
      });
    }, 1000);
  }

  moveFromStack(popped) {
    popped.moveTo({
      y: 20
    }, () => {
      setTimeout(() => {
        popped.element.remove();
        let count = this.state.stack.length;
        let index = count - 1;
        let label = this.state.stack[index].label;
        this.setHighlight(index, () => {
          this.enableButtons(true);
          this.setDescription('movedToStack', [label, index], () => {
          });
        })
      }, 2000);
    })
  }

  enableButtons(value) {
    this.setState({
      disablePush: !value,
      disablePop: !value
    });
  }

  render() {
    const array = this.state.stack.map((group) => {
      return group.label;
    });
    return (
      <React.Fragment>
        <div className='row header-row'>
          <div className='col'>
            <h1 className='stripe-green'>Data Structure: Stack</h1>
          </div>
        </div>
        <div className='descriptions'>
          <div className='row'>
            <div className='col'>
              <blockquote className='blockquote stripe-blue'>
                <p><strong>Basic Idea:</strong> Last in, first out.</p>
              </blockquote>
              <p>A <strong>Stack</strong> is a relatively simple data structure.
                A stack is basically an array where items are added to the end of it and removed from the end as well.
                Stacks are easy to implement, and they have a lot of important use cases.
              </p>
              <p>One of the most important use cases you may be familiar with is the call stack, made up of all the functions currently executing, with each new function that is called placed as a new item at the top of the stack. As a function completes, it "pops" off the stack, returning control to the function that originally called it.
              </p>
            </div>
          </div>
        </div>
        <div className='row resources'>
          <div className='col'>
            <h2 className='stripe-green'>Resources</h2>
            <ul>
              <li><a href={'#'}>Detailed Explanation of Stacks</a></li>
              <li><a href={'#'}>Practical Applications</a></li>
              <li><a href={'#'}>JavaScript Implementation</a></li>
            </ul>
          </div>
        </div>
        <div className='row mb-2'>
          <div className='col'>
            <h2 className='stripe-blue'>Visualization</h2>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <ArrayTable
              highlight={this.state.highlight}
              array={array} />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <svg id='svg-stack' ref={this.refSVG} />
          </div>
          <div className='col'>
            <div className='col-container' id='stack-controls-col'>
              <p id='stack-description'>
                {this.state.description}
              </p>
              <div id='stack-controls'>
                <button onClick={this.push}
                  disabled={this.state.disablePush}
                  className='btn btn-success btn-wide'>
                    Push (Add an Item)
                </button>
                <button onClick={this.pop}
                  disabled={this.state.disablePop}
                  className='btn btn-primary btn-wide'>
                  Pop (Remove an Item)
                </button>
              </div>
            </div>
          </div>
        </div>
        <VideoElement source={'https://www.youtube.com/embed/Ps12BI3W5Ws'} />
        <Author author={hydeStephen} />
      </React.Fragment>
    );
  }
};

export default StackPage;
