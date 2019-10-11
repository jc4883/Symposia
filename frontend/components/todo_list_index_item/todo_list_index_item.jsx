import React from 'react';
import TodoListIndexItemNewTodo from './todo_list_index_item_new_todo'
import { connect } from 'react-redux';
import { createTodo, updateTodo } from '../../actions/todo_actions';
import { Link, Redirect } from 'react-router-dom';

class TodoListIndexItem extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = Object.assign(this.props.todoList, { totalTodos: 0, completedTodos: 0}, {redirectToTodo: [false, null], redirect: false, todoAddVisible: false, newTodoTitle: "", newTodoDescription: "" });
    this.handleAddTodoButton = this.handleAddTodoButton.bind(this);
    this.handleCheckingBox = this.handleCheckingBox.bind(this);
    this.handleForm = this.handleForm.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }

  handleAddTodoButton() {
    //document.getElementById("add-a-todo-button").classList.add("show-add-a-todo-button-class")
    this.setState({todoAddVisible: true, newTodoTitle: "", newTodoDescription: ""})
  }

  goToTodoShow(todoId) {
    return () => {
      this.setState({redirectToTodo: [true, todoId]});
    }
  }



  handleTitleChange(e) {
    this.setState({ newTodoTitle: e.target.value })
  }

  handleDescriptionChange(e) {
    this.setState({ newTodoDescription: e.target.value })
  }

  handleCheckingBox(todo){
    return () => {
      let newTodo = Object.assign({}, todo);
      newTodo.done = "true";
      this.props.updateTodo(newTodo)
    }
  }

  handleUncheckingBox(todo) {
    return () => {
      let newTodo = Object.assign({}, todo);
      newTodo.done = "false";
      this.props.updateTodo(newTodo);
    }
  }

  handleForm(e) {
    e.preventDefault();
    const title = this.state.newTodoTitle;
    const description = this.state.newTodoDescription;
    const newTodo = { title: `${title}`, description: `${description}`, done: "false", todo_list_id: `${this.state.id}` }
    //this.handleCancel = this.handleCancel.bind(this);
    this.props.createTodo(newTodo).then(this.props.parentUpdate());
    this.handleCancel();
    //this.handleTitleChange = this.handleTitleChange.bind(this);
    //this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }

  handleCancel() {
    //if (this.props.handleListShowCancel === "true") {
    //  document.getElementById("add-a-todo-button-list-show").classList.remove("show-add-a-todo-button-list-show-class")
    //} 
    //else {
    //  document.getElementById("add-a-todo-button").classList.remove("show-add-a-todo-button-class")
    //}
    this.setState({ todoAddVisible: false});

  }

  render() {
    if (!this.props.allTodos) {
      return null;
    }

    let todoAddVisible;
    let buttonVisible;
    if (this.state.todoAddVisible) {
      buttonVisible = "hide";
      todoAddVisible = "show-add-a-todo-button-class";
    } else {
      buttonVisible = "";
      todoAddVisible = "hidden-add-a-todo-button-class";
    }

    if (this.state.redirectToTodo[0]) {
      return <Redirect to={`/projects/${this.props.projectId}/todo_lists/${this.props.todoList.id}/todos/${this.state.redirectToTodo[1]}`}/>
    }

    if (this.state.redirect) {
      return <Redirect to={`/projects/${this.props.projectId}/todo_lists/${this.props.todoList.id}`}/>
    }
    this.state.completedTodos = 0;
    this.state.totalTodos = 0;
    const todoArray = Object.values(this.state.todos)
    this.state.totalTodos = todoArray.length;

    // if (todoArray.length !== Object.keys(this.props.allTodos).length) {
    //   return null;
    // }

    for (let i = 0; i < this.state.totalTodos; i++) {
      if (this.props.allTodos[todoArray[i].id].done === "true") {
        this.state.completedTodos++;
      }
    }

    const doneTodos = [];
    const notDoneTodos = [];
    const listLength = this.state.todos.length;
    for (let i = 0; i < listLength; i++) {
      let todo = this.props.allTodos[this.state.todos[i].id];
      if (todo.done === "true") {
        doneTodos.push(todo)
      } else {
        notDoneTodos.push(todo)
      }
    }

    return (
      
      <div id="all-todo-list-items-div">
        <div className="numeric-fraction">
          {this.state.completedTodos}/{this.state.totalTodos}
          &nbsp;
          completed
        </div>


        

        <div id="todo-list-item-header">
          <div id="todo-list-item-title">
            <img id="todo-list-item-title-first-img" src={window.drag_boy}/>
            <img id="todo-list-item-title-second-img" src={window.green_circle} />
            <h1 onClick={() => { this.setState({redirect: true})}} >{this.state.title}</h1>
          </div>
          <h2>{this.state.description}</h2>
        </div>


        <ul>
          {notDoneTodos.map((todo) => {
            return <li key={todo.id}>
              <div onClick={this.handleCheckingBox(todo)}>
                <img src={window.not_completed_box}/>
              </div>
              <h3 onClick={this.goToTodoShow(todo.id)}>{todo.title}</h3>
            </li>
          })}
        </ul>
        <div className={buttonVisible} id="show-todo-creator" onClick={this.handleAddTodoButton}>
          <img src={window.add_a_todo_button}/>
        </div>
        <ul>
          {doneTodos.map((todo) =>  {
            return <li key={todo.id}>
              <div onClick={this.handleUncheckingBox(todo)}>
                <img src={window.completed_box}/>
              </div> 
              <h3 onClick={this.goToTodoShow(todo.id)}>{todo.title}</h3>
            </li>
          })}
        </ul>

        
        <div className={todoAddVisible}>        


          <div className="big-new-todo-div">
            <form autoComplete="off" onSubmit={this.handleForm}>
              <header id="new-todo-header">
                <input onChange={this.handleTitleChange} value={this.state.newTodoTitle} id="new-todo-title" placeholder="Describe this todo..."  className="create-todo-title" type="text"/>
              </header>
              <section>
                <input onChange={this.handleDescriptionChange}  value={this.state.newTodoDescription} id="new-todo-description" placeholder="Add extra details..." className="create-todo-description" type="text" />
              </section>

              <div id="new-todo-form-buttons">
                <input id="add-todo-button" type="image" src={window.add_this_todo}/>

                
                <div id="cancel-todo-button" onClick={this.handleCancel}>
                  <img src={window.cancel_new_list_button} />
                </div>
              </div>

            </form>
          </div>



        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  //test whether updating a todo will cause change in allTodos state(causing rerender)
  return ({
    allTodos: state.entities.todos,
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    createTodo: (todo) => dispatch(createTodo(todo)),
    updateTodo: (todo) => dispatch(updateTodo(todo)),
  })
}



//<Link to={`/projects/${this.props.projectId}/todo_lists/${this.props.todoList.id}`}>{this.state.title}</Link>



export default connect(mapStateToProps, mapDispatchToProps)(TodoListIndexItem);