import React from 'react';

const TodoArea = ({ todo }) => {
  console.log('They todo was:', todo);

  return (
    <div className="mt-3">
      <h4>{todo.name}</h4>
      <p>{todo.content}</p>
    </div>
  );
};

export default TodoArea;
