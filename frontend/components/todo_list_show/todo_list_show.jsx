import React from 'react';
import  TodoListIndexItemNewTodo  from '../todo_list_index_item/todo_list_index_item_new_todo'

class TodoListShow extends React.Component {
  componentDidMount() {
    this.props.fetchTodoList(this.props.todoListId);
  }
  render() {
    if (Object.values(this.props.todos).length === 0) {
      return null;
    }
    let todos = Object.values(this.props.todos) 
    return (
      <div>
        I AM HERE
        <h1>{this.props.todoList.title}</h1>
        <h3>{this.props.todoList.description}</h3>
        <ul>
          {todos.map((todo) => {
            return <div id={todo.id}>
              <h3>
                {todo.title}
              </h3>
              <h4>
                {todo.description}
              </h4>
              <h4>
                {todo.done}
              </h4>
            </div>
          })}
        </ul>
        <TodoListIndexItemNewTodo createTodo={this.props.createTodo} todoList={this.props.todoList}/>
      </div>
    )
  }
}

export default TodoListShow;