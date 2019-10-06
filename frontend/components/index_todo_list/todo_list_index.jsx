import React from 'react';
import NewTodoList from '../create_todo_list/new_todo_list';

class TodoListIndex extends React.Component {
  componentDidMount() {
    this.props.fetchTodoLists(this.props.projectId);
  }
  render() {
    if (!this.props.todoLists) {
      return null;
    }
    

   // let todoLists = Object.values(this.props.todoLists);

    return (
      <div>
        I'm HERE.
        <NewTodoList projectId={this.props.projectId} createTodoList={this.props.createTodoList} history={this.props.history} />

      </div>
    )
  }
}

/*         <ul>
          {todoLists.map((todoList, key) => {
            //need unique key on todo_list_item
            return <div id={todoList.id}>{todoList.title}</div>
          })}
        </ul>

        */

export default TodoListIndex;