import React from 'react';

const ArrayTable = (props) => {

  const count = props.array.length;
  const indices = Array(10).fill(0).map((_, i) => i);
  const indexHeaders = indices.map((v, i) => {
    let background = '';
    if (i >= count) {
      background = 'gray-out-cell';
    } else if (i === props.highlight) {
      background = 'highlight-cell';
    }
    return <td key={v} className={background}>{i}</td>
  });

  const elements = props.array.map((el, i) => {
    const background = i === props.highlight ? 'highlight-cell' : '';
    return <td key={el} className={background}>{el}</td>
  });

  const spacers = Array(10 - count).fill(0).map((v, i) => {
    const key = ['key', count, i].join('-');
    return <td key={key} className='gray-out-cell' />
  });

  return (
    <table className='table array-table'>
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

export default ArrayTable;
