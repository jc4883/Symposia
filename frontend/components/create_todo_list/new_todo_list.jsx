import React from 'react';
import { Link } from 'react-router-dom';


class NewTodoList extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const title = document.getElementById("name-this-list").value;
    const description = document.getElementById("describe-this-list").value;
    const todoList = {title: `${title}`, description: `${description}`, project_id: `${this.props.projectId}` }
    this.props.createTodoList(todoList)
      .then(this.props.history.push(`/projects/${this.props.projectId}/todo_lists`))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input id="name-this-list" type="text" placeholder="Name this list..."/>
        <input id="describe-this-list" type="text" placeholder="Add extra details"/>
        <button id="new-list-button">Add this list</button>
      </form>
    )
  }
}

export default NewTodoList;
