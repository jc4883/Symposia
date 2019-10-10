import React from 'react';
import TodoListShow from './todo_list_show';
import { connect } from 'react-redux';
import { fetchTodoList, deleteTodoList, updateTodoList } from '../../actions/todo_list_actions';
import { createTodo, updateTodo } from '../../actions/todo_actions';
import { logout } from '../../actions/session_actions';
import { fetchProject } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.entities.users[state.session.id],
    todoListId: ownProps.match.params.todoListId,
    todos: state.entities.todos,
    todoList: state.entities.todoLists[ownProps.match.params.todoListId],
    projectId: ownProps.match.params.projectId,
    project: state.entities.projects[ownProps.match.params.projectId],
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: () => dispatch(logout()),
    fetchTodoList: (id) => dispatch(fetchTodoList(id)),
    createTodo: (todo) => dispatch(createTodo(todo)),
    fetchProject: (id) => dispatch(fetchProject(id)),
    updateTodo: (newTodo) => dispatch(updateTodo(newTodo)),
    deleteTodoList: (id) => dispatch(deleteTodoList(id)),
    updateTodoList: (todoList) => dispatch(updateTodoList(todoList)),
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListShow)