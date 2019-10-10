import React from 'react';
import  TodoListIndexItemNewTodo  from '../todo_list_index_item/todo_list_index_item_new_todo'
import NavBar from '../nav_bar/nav_bar';

class TodoListShow extends React.Component {

  constructor(props) {
    super(props);
    this.handleAddTodoButton = this.handleAddTodoButton.bind(this);
    this.handleCheckingBox = this.handleCheckingBox.bind(this);
    this.state = {title: "", note: "", totalTodos: 0, completedTodos: 0, newTodoTitle: "", newTodoDescription: "", todoAddVisible: false};
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleForm = this.handleForm.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.goToTodoShow = this.goToTodoShow.bind(this);
    this.goToProject = this.goToProject.bind(this);
    this.goToListIndex = this.goToListIndex.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleTitleUpdate = this.handleTitleUpdate.bind(this);
    this.handleDescriptionUpdate = this.handleDescriptionUpdate.bind(this);
    this.handleUpdateForm = this.handleUpdateForm.bind(this);
    this.editFormVisible = this.editFormVisible.bind(this);
    this.handleCancelNewList = this.handleCancelNewList.bind(this);
  }

  handleDelete() {
    this.props.deleteTodoList(this.props.todoListId);
    this.goToListIndex();
  }

  handleDropdown() {
    document.getElementById("show-dropdown-todo").classList.toggle("show-show");
  }


  goToListIndex() {
    const projectId = this.props.match.params.projectId;
    this.props.history.push(`/projects/${projectId}/todo_lists`);
  }

  goToProject() {
   const projectId = this.props.match.params.projectId;
   this.props.history.push(`/projects/${projectId}`)
  }

  componentDidMount() {
    this.props.fetchTodoList(this.props.todoListId);
    this.props.fetchProject(this.props.projectId);
  }

  goToTodoShow(todoId) {
    const projectId = this.props.match.params.projectId;
    const todoListId = this.props.match.params.todoListId;
    return () => this.props.history.push(`/projects/${projectId}/todo_lists/${todoListId}/todos/${todoId}`)
  }

  handleCancel() {
    document.getElementById("show-todo-creator-list-show").classList.remove("hide-boi");
    this.setState({ todoAddVisible: false, newTodoDescription: "", newTodoTitle: "" });
  }

  handleTitleChange(e) {
    this.setState({ newTodoTitle: e.target.value })
  }

  handleDescriptionChange(e) {
    this.setState({ newTodoDescription: e.target.value })
  }

  handleTitleUpdate(e) {
    debugger
    this.setState({ title: e.target.value });
  }

  handleDescriptionUpdate(e) {
    this.setState({ note: e.target.value });
  }

  handleAddTodoButton() {
    this.setState({ todoAddVisible: true })
    document.getElementById("show-todo-creator-list-show").classList.add("hide-boi")
    //how to hide and get back? document.getElementById() only chooses one.
  }

  handleCheckingBox(todo) {
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
    document.getElementById("show-todo-creator-list-show").classList.remove("hide-boi");
    this.setState({ todoAddVisible: false, newTodoDescription: "", newTodoTitle: "" });
    const title = this.state.newTodoTitle;
    const description = this.state.newTodoDescription;
    const newTodo = { title: `${title}`, description: `${description}`, done: "false", todo_list_id: `${this.props.todoList.id}` }
    //this.handleCancel = this.handleCancel.bind(this);
    this.props.createTodo(newTodo);
    //this.handleTitleChange = this.handleTitleChange.bind(this);
    //this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }

  editFormVisible() {
    debugger
    let titleVal = document.getElementById("todolist-title-h1").innerHTML;
    let notesVal = document.getElementById("todo-list-show-nav-description").innerHTML;
    this.handleDropdown();
    document.getElementById("header-of-header").classList.add("hide-boi");
    //document.getElementById("update-form").classList.add("show-todo-show-edit-form");
    document.getElementById("update-form-todo-list").classList.remove("hide-boi");
    this.setState({title: titleVal, note: notesVal});
  }

  handleCancelNewList() {
    document.getElementById("header-of-header").classList.remove("hide-boi");
    document.getElementById("update-form-todo-list").classList.add("hide-boi");
  }

  handleUpdateForm(e) {
    e.preventDefault();
    document.getElementById("header-of-header").classList.remove("hide-boi");
    debugger
    document.getElementById("update-form-todo-list").classList.add("hide-boi")
    let newTodoList = Object.assign(this.props.todoList, {description: this.state.note, title: this.state.title})
    debugger
    this.props.updateTodoList(newTodoList);
  }

  render() {
    

    // if (Object.values(this.props.todos).length === 0) {
    //   return null;
    // }
     
    if (!this.props.project) {
      return null;
    } else if (!this.props.todoList) {
      return null;
    }

    let todoAddVisible;
    if (this.state.todoAddVisible) {
      
      todoAddVisible = "show-add-a-todo-button-list-show-class";
    } else {
      todoAddVisible = "hidden-add-a-todo-button-list-show-class";
    } 
    
    let todos = Object.values(this.props.todos);
    let listTodos = [];
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].todo_list_id == this.props.todoListId) {
        listTodos.push(todos[i]);
      }
    }
    const doneTodos = [];
    const notDoneTodos = [];
    const listLength = listTodos.length;
    for (let i = 0; i < listLength; i++) {

      if (listTodos[i].done === "true") {
        doneTodos.push(listTodos[i])
      } else {
        notDoneTodos.push(listTodos[i])
      }
    }

    this.state.completedTodos = 0;
    this.state.totalTodos = 0;
    this.state.totalTodos = listTodos.length;
    for (let i = 0; i < this.state.totalTodos; i++) {
      if (listTodos[i].done === "true") {
        this.state.completedTodos++;
      }
    }
    
    return (
        <div id="big-todo-list-show-container">
          <NavBar currentUser={this.props.currentUser} logout={this.props.logout}/>
          <nav id="project-title-todo-list-show">

            <div id="for-todo-list-show-project-title-container">
              <img src={window.update_project_icon}/>
              <div>
                <h3 onClick={this.goToProject} id="first-h3-project">{this.props.project.title}</h3>
                >
                <h3 onClick={this.goToListIndex} id="second-h3-todo">To-Dos</h3>
              </div>
            </div>
          </nav>











        <div id="todo-list-show-div">
          <div id="update-form-todo-list" className="hide-boi">
            <form onSubmit={this.handleUpdateForm}>
              <div>
                <input id="the-title-input-todolist-show" onChange={this.handleTitleUpdate} value={this.state.title} />
              </div>
              <div>
                <textarea placeholder="Add extra details..." id="the-description-input-todolist-show" onChange={this.handleDescriptionUpdate} value={this.state.note}></textarea>
              </div>
              <div id="new-list-buttons">
                <input type="image" src={window.save_changes} />
                <div id="discard-change-image-list-show" onClick={this.handleCancelNewList}>
                  <img src={window.discard_changes} />
                </div>
              </div>
              
            </form>
          </div>

          

          <div id="got-to-be-positioned-todo">
            <div onClick={this.handleDropdown} id="first-child-got-to-be-positioned-todo">
              <img id="show-more-todo-show" src={window.show_more_project_show} />
            </div>

            <div id="show-dropdown-todo" className="show-dropdown-content-todo">
              <div id="show-dropdown-close-container-todo">
                <div id="show-dropdown-close-todo" onClick={this.handleDropdown}>
                  <img src={window.project_show_dropdown} />
                </div>
              </div>

              <div onClick={this.editFormVisible} id="todo-show-edit">
                <img src={window.project_show_edit} />
                <h4>Edit</h4>
              </div>
              <div onClick={this.handleDelete} id="todo-show-delete">
                <img src={window.project_show_delete} />
                <h4>Put in the trash</h4>
              </div>
            </div>
          </div> 



          
          <div id="todo-list-show-header">
            <div id="header-of-header">
              <div id="fraction">
                {this.state.completedTodos}/{this.state.totalTodos}
                &nbsp;
                completed
              </div>
              <div id="todo-list-show-title">
                <img id="todo-list-show-title-second-img" src={window.slightly_bigger_green_circle} />
                <h1 id="todolist-title-h1">{this.props.todoList.title}</h1>
              </div>

              <h2 id="todo-list-show-nav-description">{this.props.todoList.description}</h2>
            </div>






              
            <div id="margin-right-list-show">
              <ul>
                {notDoneTodos.map((todo) => {
                  return <li key={todo.id}>
                    <div onClick={this.handleCheckingBox(todo)}>
                      <img src={window.not_completed_box} />
                    </div>
                    <h3 onClick={this.goToTodoShow(todo.id)}>{todo.title}</h3>
                  </li>
                })}
              </ul>
              <div id="show-todo-creator-list-show" onClick={this.handleAddTodoButton}>
                <img src={window.add_a_todo_button} />
              </div>
              <ul>
                {doneTodos.map((todo) => {
                  return <li key={todo.id}>
                    <div onClick={this.handleUncheckingBox(todo)}>
                      <img src={window.completed_box} />
                    </div>
                    <h3 onClick={this.goToTodoShow(todo.id)}>{todo.title}</h3>
                  </li>
                })}
              </ul>
            </div>

              
            <div id="add-a-todo-button-list-show" className={todoAddVisible}>
              <div className="big-new-todo-div">
                <form autoComplete="off" onSubmit={this.handleForm}>
                  <header id="new-todo-header">
                    <input value={this.state.newTodoTitle} onChange={this.handleTitleChange} id="new-todo-title" placeholder="Describe this todo..." className="create-todo-title" type="text" />
                  </header>
                  <section>
                    <input value={this.state.newTodoDescription} onChange={this.handleDescriptionChange} id="new-todo-description" placeholder="Add extra details..." className="create-todo-description" type="text" />
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

        </div>
      </div>




 
    )
  }
}

export default TodoListShow;


/*
<div id="hidden-new-todo" className="hidden-new-todo-class">
                <TodoListIndexItemNewTodo createTodo={this.props.createTodo} todoList={this.props.todoList} />
              </div>
*/