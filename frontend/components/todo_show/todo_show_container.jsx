import React from 'react';
import { connect } from 'react-redux';
import TodoShow from './todo_show';
import { fetchTodoList } from '../../actions/todo_list_actions';
import { fetchProject } from '../../actions/project_actions';
import { logout } from '../../actions/session_actions';
import { updateTodo, deleteTodo } from '../../actions/todo_actions';


const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.entities.users[state.session.id],
    todoListId: ownProps.match.params.todoListId,
    todo: state.entities.todos[ownProps.match.params.todoId],
    todoList: state.entities.todoLists[ownProps.match.params.todoListId],
    projectId: ownProps.match.params.projectId,
    project: state.entities.projects[ownProps.match.params.projectId],
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: () => dispatch(logout()),
    updateTodo: (todo) => dispatch(updateTodo(todo)),
    fetchProject: (id) => dispatch(fetchProject(id)),
    fetchTodoList: (id) => dispatch(fetchTodoList(id)),
    deleteTodo: (id) => dispatch(deleteTodo(id)),
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoShow);