import React from 'react';

const QueueControls = (props) => {

  const updateValue = (e) => {
    props.updateValue(e.target.value);
  }

  return (
    <div className='row'>
      <div className='col-sm'>
        <div className='form-group'>
          <input className='form-control'
            value={props.valueToAdd}
            onChange={updateValue}
             />
          <button className='btn btn-primary'
            onClick={props.enqueue}>
            Add Value
          </button>
        </div>
      </div>
      <div className='col-sm'>

      </div>
    </div>
  );
};

export default QueueControls;
