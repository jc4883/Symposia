import { RECEIVE_TODO, REMOVE_TODO, RECEIVE_ALL_TODOS} from '../actions/todo_actions';
import { RECEIVE_ALL_TODO_LISTS, RECEIVE_TODO_LIST } from '../actions/todo_list_actions';

const todosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_TODO_LISTS:
      return Object.assign({}, action.todoLists.todos);
    case RECEIVE_TODO:
      //not tested
      return Object.assign({}, state, { [action.todo.id]: action.todo });
    case RECEIVE_TODO_LIST:

      return Object.assign({}, state, action.todoList.todos ) 


    case REMOVE_TODO:
      //not tested
      let newState = Object.assign({}, state);
      delete newState[action.todoId];
      return newState;
    default:
      return state;
  }
}

export default todosReducer;