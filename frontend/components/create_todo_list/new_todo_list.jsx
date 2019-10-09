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
    if (title === "") {
      //ui response for empty input
    }
    const description = document.getElementById("describe-this-list").value;
    const todoList = {title: `${title}`, description: `${description}`, project_id: `${this.props.projectId}` }
    this.handleCancel();
    this.props.createTodoList(todoList)
      .then(this.props.history.push(`/projects/${this.props.projectId}/todo_lists`))
  }

  handleCancel() {
    document.getElementById("hidden-new-todo-list").classList.remove("show-new-todo-list-class")
    //document.getElementById("show-todo-creator").classList.remove("hide")
  }

  render() {
    return (
      <div className="big-new-list-div">
        <form className="new-list-form" autoComplete="off">
          <header id="new-list-header">
            <input  id="name-this-list" type="text" placeholder="Name this list..."/>
          </header>
          <section>
            <input id="describe-this-list" type="text" placeholder="Add extra details"/>
          </section>

          <div id="new-list-form-buttons">
            <div id="add-list-button" onClick={this.handleSubmit}>
              <img src={window.confirm_new_list_button}/>
            </div>
            <div id="cancel-list-button" onClick={this.handleCancel}>  
              <img src={window.cancel_new_list_button}/>
            </div>
          </div>
          
        </form>
      </div>
    )
  }
}

export default NewTodoList;
