import React from 'react';

const QueueControls = (props) => {
  return (
    <div className='row queue-controls'>
      <div className='col-sm'>
        <button className='btn btn-primary'
          disabled={!props.allowEnqueue}
          onClick={props.enqueue}>
          Enqueue
        </button>
      </div>
      <div className='col-sm'>
        <button className='btn btn-secondary'
          disabled={!props.allowDequeue}
          onClick={props.dequeue}>
          Dequeue
        </button>
      </div>
    </div>
  );
};

export default QueueControls;
