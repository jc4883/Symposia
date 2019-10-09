import React from 'react';
import TodoListIndex from './todo_list_index';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions'
import { fetchTodoLists, createTodoList } from '../../actions/todo_list_actions';
import { fetchTodos } from '../../actions/todo_actions';
import { fetchProject } from '../../actions/project_actions'

const mapStateToProp = (state, ownProps) => {
  return ({
    projectId: ownProps.match.params.projectId,
    todoLists: state.entities.todoLists,
    currentUser: state.entities.users[state.session.id],
    project: state.entities.projects[ownProps.match.params.projectId]
  })
  //note that we must make another ajax call to get projects, not optimal
}

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: () => dispatch(logout()),
    createTodoList: (todo_list) => dispatch(createTodoList(todo_list)),
    fetchTodoLists: (project_id) => dispatch(fetchTodoLists(project_id)),
    fetchTodos: (project_id) => dispatch(fetchTodos(project_id)),
    fetchProject: (id) => dispatch(fetchProject(id))
  })
}

export default connect(mapStateToProp, mapDispatchToProps)(TodoListIndex)