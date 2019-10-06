import React from 'react';
import TodoListIndex from './todo_list_index';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions'
import { fetchTodoLists, createTodoList } from '../../actions/todo_list_actions';



const mapStateToProp = (state, ownProps) => {
  return ({
    projectId: ownProps.match.params.projectId,
    todoLists: state.entities.todoLists,
    currentUser: state.entities.users[state.session.id]
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: () => dispatch(logout()),
    createTodoList: (todo_list) => dispatch(createTodoList(todo_list)),
    fetchTodoLists: (project_id) => dispatch(fetchTodoLists(project_id))
  })
}

export default connect(mapStateToProp, mapDispatchToProps)(TodoListIndex)