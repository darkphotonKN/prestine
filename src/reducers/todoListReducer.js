/* GET LIST OF TODOS */

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];

    case 'DELETE_TODO':
      console.log('DELETE_TODO state:', state);
      const todo = state.find((todo) => {
        console.log(`Comparing ${todo.name} with ${action.payload.name}`);
        return todo.name === action.payload.name;
      });

      console.log(todo);

      const index = state.indexOf(todo);

      console.log('Index: ', index);

      if (index > 0) {
        // remove from the state from store
        state[index] = undefined;

        return state;
      } else return state;

    default:
      return state;
  }
};
