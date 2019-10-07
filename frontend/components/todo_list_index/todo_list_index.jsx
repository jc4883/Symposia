import React from 'react';
import NewTodoList from '../create_todo_list/new_todo_list';
import TodoListIndexItem from '../todo_list_index_item/todo_list_index_item';

class TodoListIndex extends React.Component { 
  componentDidMount() {
    this.props.fetchTodoLists(this.props.projectId); 
  }

  render() {
    if (Object.keys(this.props.todoLists).length === 0) {
      return null;
    }
    let todoLists = Object.values(this.props.todoLists);
    return (
      <div>
        TODO LIST INDEX
        <NewTodoList projectId={this.props.projectId} createTodoList={this.props.createTodoList} history={this.props.history} />
        {todoLists.map((todoList) => {
          return <TodoListIndexItem todoList={todoList} key={todoList.id}/>; 
        })}
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