import { RECEIVE_TODO, REMOVE_TODO, RECEIVE_ALL_TODOS} from '../actions/todo_actions';

const todosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_TODOS:
      return Object.assign({}, action.todos);
    case RECEIVE_TODO:
      return Object.assign({}, state, { [action.todo.id]: action.todo });
    case REMOVE_TODO:
      let newState = Object.assign({}, state);
      delete newState[action.todoId];
      return newState;
    default:
      return state;
  }
}

export default todosReducer;