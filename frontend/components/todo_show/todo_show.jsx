import React from 'react';


class TodoShow extends React.Component {

  componentDidMount() {
    debugger
    this.props.fetchTodoList(this.props.todoListId);
  }

  render() {
    debugger
    if (!this.props.todo) {
      return null;
    }

    return (
      <div>
        I'm here
        <h1>{this.props.todo.title}</h1>
        <h3>{this.props.todo.description}</h3>
        <h4>{this.props.todo.done}</h4>
      </div>
    )
  }
}

export default TodoShow

