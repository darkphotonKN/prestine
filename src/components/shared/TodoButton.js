import React from 'react';

const TodoButton = ({ name, onClickMethod }) => {
  return (
    <button
      className="btn btn-warning mt-4"
      style={{
        backgroundColor: '#d1d8e0',
        color: '#3867d6',
        border: '1px solid #3867d6'
      }}
      onClick={onClickMethod}
    >
      {name}
    </button>
  );
};

export default TodoButton;
