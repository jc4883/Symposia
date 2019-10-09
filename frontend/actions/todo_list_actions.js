import * as TodoList_API from '../util/todo_list_util';

export const RECEIVE_TODO_LIST = "RECEIVE_TODO_LIST";
export const REMOVE_TODO_LIST = "REMOVE_TODO_LIST";
export const RECEIVE_ALL_TODO_LISTS = "RECEIVE_ALL_TODO_LISTS";

const receiveTodoLists = (todoLists) => {
  return ({
    type: RECEIVE_ALL_TODO_LISTS,
    todoLists
  })
}

const receiveTodoList = (todoList) => {
  return ({
    type: RECEIVE_TODO_LIST, 
    todoList,
  })
}

const removeTodoList = (id) => {
  return ({
    type: REMOVE_TODO_LIST,
    todoListId: id,
  })
} 


export const fetchTodoLists = (project_id) => dispatch => {
  return TodoList_API.fetchTodoLists(project_id).then(todoLists => {
    return dispatch(receiveTodoLists(todoLists))
  })
}

export const fetchTodoList = (id) => dispatch => {
  return TodoList_API.fetchTodoList(id).then(todoList => {
    return dispatch(receiveTodoList(todoList))
  })
}

export const createTodoList = (todoList) => dispatch => {
  return TodoList_API.createTodoList(todoList).then(todoList => {
    return dispatch(receiveTodoList(todoList))
  })
}

export const updateTodoList = (todoList) => dispatch => {
  return TodoList_API.updateTodoList(todoList).then(todoList => {
    return dispatch(receiveTodoList(todoList))
  })
}

export const deleteTodoList = (id) => dispatch => {
  return TodoList_API.deleteTodoList(id).then(todoList => {
    debugger
    return dispatch(removeTodoList(Object.keys(todoList.todoList)[0]))
  })
}