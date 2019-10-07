import {RECEIVE_ALL_TODO_LISTS, RECEIVE_TODO_LIST, REMOVE_TODO_LIST } from '../actions/todo_list_actions';
import { RECEIVE_TODO } from '../actions/todo_actions';

const todoListsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TODO:
      debugger
      let newState2 = Object.assign({}, state);
      newState2[action.todo.todo_list_id].todos.push({id: action.todo.id})


      return Object.assign({}, state)
    case RECEIVE_ALL_TODO_LISTS:
     let newState1 = Object.assign({}, state);
     return Object.assign(newState1, action.todoLists.todoLists)
    case RECEIVE_TODO_LIST:
      //need to write show jbuilder
      debugger
      return Object.assign({}, state, {[Object.keys(action.todoList.todoList)[0]] : Object.values(action.todoList.todoList)[0]});
    case REMOVE_TODO_LIST:
      let newState = Object.assign({}, state);
      delete newState[action.todoListId];
      return newState;      
    default:
        return state;
  }
}


export default todoListsReducer;