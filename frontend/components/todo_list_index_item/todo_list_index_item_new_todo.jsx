import React from 'react';
//import { createTodo } from '../../actions/todo_actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class TodoListIndexItemNewTodo extends React.Component {

  constructor(props) {
    super(props);
    this.handleForm = this.handleForm.bind(this);
    //this.state = {redirect: false};
  }

  handleForm(e) {
    e.preventDefault();
    const title = document.getElementById("new-todo-title").value;
    const description = document.getElementById("new-todo-description").value;
    const newTodo = { title: `${title}`, description: `${description}`, done: "false", todo_list_id: `${this.props.todoList.id}` }
    this.props.createTodo(newTodo);
  }

  render() {

    // if (this.state.redirect) {
    //   return <Redirect to={`/projects/${this.props.todoList.project_id}/todo_lists`}/>
    // }


    return (
      <form onSubmit={this.handleForm}>
        <input id="new-todo-title" className="create-todo-title" type="text"/>
        <input id="new-todo-description" className="create-todo-description" type="text"/>
        <button>Add this todo</button>
      </form>
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