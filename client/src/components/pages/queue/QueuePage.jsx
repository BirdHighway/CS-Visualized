import React from 'react';
import QueueVisualization from './QueueVisualization';
import Author from '../../shared/Author';
import { hydeStephen } from '../../../authors';

const QueuePage = () => {
  return (
    <React.Fragment>
      <div className='row header-row'>
        <div className='col'>
          <h1 className='stripe-green'>Data Structure: Queue</h1>
        </div>
      </div>
      <div className='descriptions'>
        <div className='row'>
          <div className='col'>
            <blockquote className='blockquote stripe-blue'>
              <p><strong>Basic Idea:</strong> First in, first out.</p>
            </blockquote>
            <p>A <strong>Queue</strong> is a relatively simple data structure.
              A queue is basically an array where items are added to the end of it and removed from the front.
              Queues are easy to implement, and they have a lot of important use cases.
            </p>
          </div>
        </div>
      </div>
      <div className='row resources'>
        <div className='col'>
          <h2 className='stripe-green'>Resources</h2>
          <ul>
            <li><a href={'#'}>Detailed Explanation of Queues</a></li>
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
          <QueueVisualization />
        </div>
      </div>
      <Author author={hydeStephen}/>
    </React.Fragment>
  );
};

export default QueuePage;
