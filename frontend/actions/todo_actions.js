import * as Todo_API from '../util/todo_util';

export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const RECEIVE_ALL_TODOS = 'RECEIVE_ALL_TODOS';


const receiveTodos = (todos) => {
  return ({
    type: RECEIVE_ALL_TODOS,
    todos
  })
}

const receiveTodo = (todo) => {
  return ({
    type: RECEIVE_TODO,
    todo,
  })
}

const removeTodo = (id) => {
  return ({
    type: REMOVE_TODO,
    todoId: id,
  })
}

export const fetchTodos = () => dispatch => {
  return Todo_API.fetchTodos().then(todos => {
    return dispatch(receiveTodos(todos));
  })
}

export const fetchTodo = (id) => dispatch => {
  return Todo_API.fetchTodo(id).then(todo => {
    return dispatch(receiveTodo(todo));
  })
}

export const createTodo = (todo) => dispatch => {
  return Todo_API.createTodo(todo).then(todo => {
    return dispatch(receiveTodo(todo))
  });
}

export const updateTodo = (todo) => dispatch => {
  return Todo_API.updateTodo(todo).then(todo => {
    return dispatch(receiveTodo(todo))
  })
}

export const deleteTodo = (id) => dispatch => {
  return Todo_API.deleteTodo(id).then(todo => {
    return dispatch(removeTodo(todo.id))
  })
}