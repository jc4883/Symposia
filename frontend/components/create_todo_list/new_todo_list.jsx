import React from 'react';
import { Link } from 'react-router-dom';


class NewTodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {name: "", description: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(field) {
    return (e) => {
      this.setState({[field] : e.target.value })
    }
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
    this.state.name = "";
    this.state.description = "";
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
        <form className="new-list-form" autoComplete="off" onSubmit={this.handleSubmit}>
          <header id="new-list-header">
            <input value={this.state.name} onChange={this.handleChange("name")} id="name-this-list" type="text" placeholder="Name this list..."/>
          </header>
          <section>
            <input value={this.state.description} onChange={this.handleChange("description")} id="describe-this-list" type="text" placeholder="Add extra details"/>
          </section>

          <div id="new-list-form-buttons">
            <input id="add-list-button" type="image" src={window.confirm_new_list_button}/>
       
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
