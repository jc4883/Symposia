import {RECEIVE_ALL_TODO_LISTS, RECEIVE_TODO_LIST, REMOVE_TODO_LIST } from '../actions/todo_list_actions';
import { RECEIVE_TODO, UPDATE_TODO } from '../actions/todo_actions';

const todoListsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TODO:
      let newState3 = Object.assign({}, state);
      newState3[action.todo.todo_list_id].todos.push({id: action.todo.id})
      return newState3;
    case RECEIVE_TODO_LIST:
      //need to write show jbuilder
      return Object.assign({}, state, {[Object.keys(action.todoList.todoList)[0]] : Object.values(action.todoList.todoList)[0]});

    case UPDATE_TODO: 
      let newState2 = Object.assign({}, state);
      const keys = Object.keys(state);
      for (let i = 0; i < keys.length; i++) {
        if (keys[i] == action.todo.todo_list_id) {
          return newState2
        }
      }
      return newState2[action.todo.todo_list_id].todos.push({ id: action.todo.id })

    case RECEIVE_ALL_TODO_LISTS:
     let newState1 = Object.assign({}, state);
     return Object.assign(newState1, action.todoLists.todoLists);
    case REMOVE_TODO_LIST:
      let newState = Object.assign({}, state);
      delete newState[action.todoListId];
      return newState;      
    default:
        return state;
  }
}


export default todoListsReducer;