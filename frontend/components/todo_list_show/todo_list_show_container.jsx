import React from 'react';
import TodoListShow from './todo_list_show';
import { connect } from 'react-redux';
import { fetchTodoList } from '../../actions/todo_list_actions';
import { createTodo } from '../../actions/todo_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    todoListId: ownProps.match.params.todoListId,
    todos: state.entities.todos,
    todoList: state.entities.todoLists[ownProps.match.params.todoListId]
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchTodoList: (id) => dispatch(fetchTodoList(id)),
    createTodo: (todo) => dispatch(createTodo(todo))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListShow)