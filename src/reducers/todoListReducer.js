/* GET LIST OF TODOS */

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];

    case 'DELETE_TODO':
      console.log('DELETE_TODO state:', state);
      const todoList = [...state]; // shallow clone state
      // check that the todo is present in the todo state of our redux store
      const todo = todoList.find((todo) => {
        console.log(`Comparing ${todo.name} with ${action.payload.name}`);
        return todo.name === action.payload.name;
      });

      console.log(todo);

      const index = todoList.indexOf(todo);

      console.log('Index: ', index);

      if (index >= 0) {
        // remove from the todoList from store
        todoList.splice(index, 1);

        return todoList;
      } else return todoList;

    default:
      return state;
  }
};
