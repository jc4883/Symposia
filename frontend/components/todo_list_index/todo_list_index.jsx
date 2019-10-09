import React from 'react';
import NewTodoList from '../create_todo_list/new_todo_list';
import TodoListIndexItem from '../todo_list_index_item/todo_list_index_item';
import NavBar from '../nav_bar/nav_bar';
import { Redirect } from 'react-router-dom';


class TodoListIndex extends React.Component { 

  constructor(props) {
    super(props);
    this.state = { redirect: false };
    this.handleRedirect = this.handleRedirect.bind(this);
    this.handleNewListButton = this.handleNewListButton.bind(this);
    
  }

  componentDidMount() {
    this.props.fetchTodoLists(this.props.projectId); 
    this.props.fetchProject(this.props.projectId);
  }

  handleRedirect() {
    this.setState({redirect: true});
  }

  handleNewListButton() {
    document.getElementById("hidden-new-todo-list").classList.add("show-new-todo-list-class")
    document.getElementById("name-this-list").focus();
  }

  render() {
    if (!this.props.project) {
      return null;
    }
    if (this.state.redirect) {
      return <Redirect to={`/projects/${this.props.projectId}`}/>
    }
    let lists = Object.values(this.props.todoLists);
    let todoLists = [];
    debugger
    for (let i = 0; i < lists.length; i++) {
      if (lists[i].project_id == this.props.projectId) {
        todoLists.push(lists[i]);
      }
    }

    return (
      <div id="big-todo-list-index-container">
        <NavBar currentUser={this.props.currentUser} logout={this.props.logout} />
        <nav id="project-title-todo-list-index">

          <div id="for-project-title-todo-list-container" onClick={this.handleRedirect}>
            <img src={window.update_project_icon} />
            <div>{this.props.project.title}</div>
          </div>
        </nav>

        <div id="todo-list-index-div">
          <div onClick={this.handleNewListButton} id="new-list-button">
            <img src={window.new_list_button}/>
          </div>
          <h2 id="todo-h2">To-dos</h2>
          <div id="hidden-new-todo-list" className="hidden-new-todo-list-class">
            <NewTodoList projectId={this.props.projectId} createTodoList={this.props.createTodoList} history={this.props.history} />
          </div>
          {todoLists.slice(0).reverse().map((todoList) => {
            return <TodoListIndexItem projectId={this.props.projectId} todoList={todoList} key={todoList.id} handleListShowCancel="false" />; 
          })}
        </div>
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