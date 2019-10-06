import {RECEIVE_ALL_TODO_LISTS, RECEIVE_TODO_LIST, REMOVE_TODO_LIST } from '../actions/todo_list_actions';

const todoListsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_TODO_LISTS:
      return Object.assign({}, action.todoLists);
    case RECEIVE_TODO_LIST:
      return Object.assign({}, state, {[action.todoList.id] : action.todoList});
    case REMOVE_TODO_LIST:
      let newState = Object.assign({}, state);
      delete newState[action.todoListId];
      return newState;
    default:
        return state;
  }
}


export default todoListsReducer;