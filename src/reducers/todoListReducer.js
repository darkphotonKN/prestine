/* GET LIST OF TODOS */

const todoList = [];

export default (state = todoList, action) => {
  switch (action.type) {
    case 'GET_LIST':
      return todoList;

    case 'ADD_TODO':
      todoList.push(action.payload);

      return todoList;

    case 'DELETE_TODO':
      console.log(todoList);
      const todo = todoList.find((todo) => todo.name === action.payload.name);

      const index = todoList.indexOf(todo);

      if (index) return todoList.slice(index, index + 1);
      else return todoList;

    default:
      return state;
  }
};
