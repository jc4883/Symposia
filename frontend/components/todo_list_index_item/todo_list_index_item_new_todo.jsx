import React from 'react';
//import { createTodo } from '../../actions/todo_actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class TodoListIndexItemNewTodo extends React.Component {

  constructor(props) {
    super(props);
    this.handleForm = this.handleForm.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.state = {newTodoFormClose: false}
  }

  handleForm(e) {
    e.preventDefault();
    const title = document.getElementById("new-todo-title").value;
    const description = document.getElementById("new-todo-description").value;
    const newTodo = { title: `${title}`, description: `${description}`, done: "false", todo_list_id: `${this.props.todoList.id}` }
    this.handleCancel = this.handleCancel.bind(this);
    this.props.createTodo(newTodo);
  }

  handleCancel() {
    //if (this.props.handleListShowCancel === "true") {
    //  document.getElementById("add-a-todo-button-list-show").classList.remove("show-add-a-todo-button-list-show-class")
    //} 
    //else {
    //  document.getElementById("add-a-todo-button").classList.remove("show-add-a-todo-button-class")
    //}
    this.setState({newTodoFormVisible: false})
    
  }

  render() {

    return (
      <div className="big-new-todo-div">
        <form autoComplete="off">
          <header id="new-todo-header">
            <input placeholder="Describe this todo..." id="new-todo-title" className="create-todo-title" type="text"/>
          </header>
          <section>
            <input placeholder="Add extra details..." id="new-todo-description" className="create-todo-description" type="text"/>
          </section>

          <div id="new-todo-form-buttons">
            <div id="add-todo-button" onClick={this.handleForm}>
              <img src={window.add_this_todo} />
            </div>
            <div id="cancel-todo-button" onClick={this.handleCancel}>
              <img src={window.cancel_new_list_button} />
            </div>
          </div>

        </form>
      </div>
    )
  }
  
}



const mapStateToProps = (state, ownProps) => {
  return ({
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    //createTodo: (todo) => dispatch(createTodo(todo))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListIndexItemNewTodo);