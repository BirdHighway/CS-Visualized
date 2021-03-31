import React from 'react';

const QueueContents = (props) => {
  if (!props || !props.array) {
    return null;
  }

  const count = props.array.length;
  const indices = Array(10).fill(0).map((_, i) => i);
  const indexHeaders = indices.map((v, i) => {
    const background = i >= count ? 'gray-out-cell' : '';
    return (
      <td key={v} className={background}>{v}</td>
    );
  });

  const elements = props.array.map((el) => {
    return (<td key={el}>{el}</td>);
  });

  const spacers = Array(10 - count).fill(0).map((v, i) => {
    const key = ['key', count, i].join('-');
    return (
      <td key={key} className='gray-out-cell'></td>
    );
  });

  return (
    <table className='table queue-contents'>
      <thead>
        <tr>
          <th colSpan={11}>
            Array Length: {count}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className='row-header'>
            Index:
          </th>
          {indexHeaders}
        </tr>
        <tr>
          <th className='row-header'>
            Value:
          </th>
          {elements}
          {spacers}
        </tr>
      </tbody>
    </table>
  );
};

export default QueueContents;
