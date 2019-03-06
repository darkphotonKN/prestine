/* Reducers */

import { combineReducers } from 'redux';
import todoListReducer from './todoListReducer';

export default combineReducers({
  // exporting the reducer with the name 'todos'
  todos: todoListReducer
});
