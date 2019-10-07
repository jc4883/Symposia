import React from 'react';
import { connect } from 'react-redux';
import TodoShow from './todo_show';
import { fetchTodoList } from '../../actions/todo_list_actions';


const mapStateToProps = (state, ownProps) => {
  debugger
  return ({
    todoListId: ownProps.match.params.todoListId,
    todo: state.entities.todos[ownProps.match.params.todoId],
    todoList: state.entities.todoLists[ownProps.match.params.todoListId]
  })
}

const mapDispatchToProps = (dispatch) => {
  debugger
  return ({
    fetchTodoList: (id) => dispatch(fetchTodoList(id))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoShow)