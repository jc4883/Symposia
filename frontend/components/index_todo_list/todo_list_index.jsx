import React from 'react';


class TodoListIndex extends React.Component {
  componentDidMount() {
    this.props.fetchTodoLists(this.props.projectId);
  }
  render() {
    if (!this.props.todoLists) {
      return null;
    }
    

    let todoLists = Object.values(this.props.todoLists);

    return (
      <div>
        I'm HERE.
        <ul>
          {todoLists.map(todoList => {
            debugger
            return <div>{todoList.title}</div>
          })}
        </ul>
      </div>
    )
  }
}

export default TodoListIndex;