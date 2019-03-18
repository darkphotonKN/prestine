import React from 'react';
import TodoArea from './TodoArea';
import TodoButton from './shared/TodoButton';

const Todo = ({ step, todoList, deleteTodo }) => {
  console.log(todoList);
  return (
    <>
      {todoList ? (
        todoList.map((todo) => (
          <>
            <TodoArea key={todo.name} todo={{ ...todo }} />
            {/* pass the specific todo to it's own button */}
            <TodoButton
              name={'Delete'}
              onClickMethod={() => deleteTodo(todo)}
            />
          </>
        ))
      ) : (
        <div className="mt-4">You have no todos!</div>
      )}
    </>
  );
};

export default Todo;
