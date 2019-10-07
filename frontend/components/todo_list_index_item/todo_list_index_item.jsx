import React from 'react';
import TodoListIndexItemNewTodo from './todo_list_index_item_new_todo'
import { connect } from 'react-redux';
import { createTodo } from '../../actions/todo_actions';

class TodoListIndexItem extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = this.props.todoList;
  }

  render() {
    const listTodos = [];
    const listLength = this.state.todos.length;
    for (let i = 0; i < listLength; i++) {
        listTodos.push(this.props.allTodos[this.state.todos[i].id]);
    }
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h2>{this.state.description}</h2>
        <ul>
          {listTodos.map((todo) =>  {
            let checked = todo.checked ? "checked" : "unchecked";
            return <li key={todo.id}>
              <h3>{todo.title}</h3>
              <h4>{checked}</h4>
            </li>
          })}
        </ul>
          <TodoListIndexItemNewTodo createTodo={this.props.createTodo} todoList={this.state}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    allTodos: state.entities.todos,
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    createTodo: (todo) => dispatch(createTodo(todo))
  })
}






export default connect(mapStateToProps, mapDispatchToProps)(TodoListIndexItem);