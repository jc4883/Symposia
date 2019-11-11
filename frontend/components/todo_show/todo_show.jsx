import React from 'react';
import NavBar from '../nav_bar/nav_bar';


class TodoShow extends React.Component {
  constructor(props) {
    super(props);
    this.monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
    this.state = {note: "", title: ""};
    //this.updateNote = this.updateNote.bind(this);
    this.updateChecked = this.updateChecked.bind(this);
    this.editFormVisible = this.editFormVisible.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleForm = this.handleForm.bind(this);
    this.handleDiscard = this.handleDiscard.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.goToProject = this.goToProject.bind(this);
    this.goToListIndex = this.goToListIndex.bind(this);
    this.goToList = this.goToList.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  goToProject() {
    const projectId = this.props.match.params.projectId;
    this.props.history.push(`/projects/${projectId}`);
  }
  goToListIndex() {
    const projectId = this.props.match.params.projectId;
    this.props.history.push(`/projects/${projectId}/todo_lists`);
  }
  goToList() {
    const projectId = this.props.match.params.projectId;
    const todoListId = this.props.match.params.todoListId;
    this.props.history.push(`/projects/${projectId}/todo_lists/${todoListId}`);
  }

  handleForm(e) {
    e.preventDefault();
    let newTodo = Object.assign(this.props.todo, {description: this.state.note, title: this.state.title})
    this.props.updateTodo(newTodo);
    document.getElementById("todo-show-nav").classList.remove("center-checkbox")

    document.getElementById("shortened-border-show-inputs").classList.remove("hide-boi-not-important");
    document.getElementById("update-form").classList.remove("show-todo-show-edit-form");
    document.getElementById("right-of-image").classList.remove("hide-boi-not-important");

  }



  handleDiscard(e) {
    document.getElementById("todo-show-nav").classList.remove("center-checkbox")

    document.getElementById("right-of-image").classList.remove("hide-boi-not-important");
    document.getElementById("shortened-border-show-inputs").classList.remove("hide-boi-not-important");
    document.getElementById("update-form").classList.remove("show-todo-show-edit-form");
    this.setState({note: this.props.todo.description})
  }

  handleTitleChange(e) {
    this.setState({title: e.target.value});
  }

  handleDescriptionChange(e) {
    this.setState({note: e.target.value});
  }

  editFormVisible() {
    let clickable = document.getElementById("todo-show-notes-clickable");
    let titleVal = document.getElementById("right-of-image-h1").innerHTML;
    let noteVal = clickable.innerHTML;
    if (noteVal === "Add extra details...") {
      noteVal = "";
    }
    document.getElementById("todo-show-nav").classList.add("center-checkbox")
    document.getElementById("right-of-image").classList.add("hide-boi-not-important")
    document.getElementById("shortened-border-show-inputs").classList.add("hide-boi-not-important");
    document.getElementById("update-form").classList.add("show-todo-show-edit-form");
    this.setState({note: noteVal});
    this.setState({title: titleVal})
  }

  handleDelete() {
    this.props.deleteTodo(this.props.todo.id);
    this.goToList();
  }

  updateChecked() {
    if (this.props.todo.done === "true") {
      let newTodo = Object.assign({}, this.props.todo)
      newTodo.done = "false";
      this.props.updateTodo(newTodo)
    } else {
      let newTodo = Object.assign({}, this.props.todo)
      newTodo.done = "true";
      this.props.updateTodo(newTodo)
    }
  }

  updateNote() {
    let note = document.getElementById("todo-show-note-input").value
    this.setState({note: note});
  }

  componentDidMount() {
    this.props.fetchTodoList(this.props.todoListId);
    this.props.fetchProject(this.props.projectId);
  }

  handleDropdown() {
    document.getElementById("show-dropdown-todo").classList.toggle("show-show")
  }

  render() {
    let imageFile;

    if (!this.props.todo) {
      return null;
    }

    if (this.props.todo.done === "true") {
      imageFile = window.complete_todo_show;
    } else {
      imageFile = window.incomplete_todo_show;
    }

    //this.setState({note: this.props.todo.description})
    
    let dateStr = this.props.todo.created_at;
    dateStr = dateStr.slice(0, -1);
    let date = new Date(dateStr);
    let day = date.getDate();
    let month = this.monthNames[date.getMonth()];
    let year = date.getFullYear();
    const createdAt = `${month} ${day}, ${year}`;

    let noteInitVal;
    let klassName;
    if (this.props.todo.description === "") {
      noteInitVal = "Add extra details...";
      klassName = "no-todo-description";
    } else {
      noteInitVal = `${this.props.todo.description}`;
      klassName = "yes-todo-description";
    }

    return (

      <div id="big-todo-show-container">
        <NavBar history={this.props.history} currentUser={this.props.currentUser} logout={this.props.logout} />
        <nav id="project-title-todo-show">
          <div>
            <div id="update-project-icon" onClick={this.updateChecked}>
              <img src={window.update_project_icon} />
            </div>
            <div>
              <h3 onClick={this.goToProject} id="first-h3-todo-show">{this.props.project.title}</h3>
              >
              <h3 onClick={this.goToListIndex} id="second-h3-todo-show">To-dos</h3> 
              > 
              <h3 onClick={this.goToList} id="third-h3-todo-show">{this.props.todoList.title}</h3>
              </div>
          </div>
        </nav>

        <div id="todo-show-container">
           
           
           
           
           
           
          <div id="got-to-be-positioned-todo">
             <div onClick={this.handleDropdown} id="first-child-got-to-be-positioned-todo">
                <img id="show-more-todo-show" src={window.show_more_project_show}/>
             </div>

             <div id="show-dropdown-todo" className="show-dropdown-content-todo">
                <div id="show-dropdown-close-container-todo">
                  <div id="show-dropdown-close-todo" onClick={this.handleDropdown}>
                    <img src={window.project_show_dropdown}/>
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







          <nav id="todo-show-nav">
            <div onClick={this.updateChecked} id="todo-show-checkbox">
              <img src={imageFile} />
            </div>
            <div id="right-of-image">
              <h1 id="right-of-image-h1" onClick={this.editFormVisible}>{this.props.todo.title}</h1>
              <h4>Added on {createdAt}</h4>
            </div>
          </nav>
          <div id="shortened-border-show-inputs">
            <nav id="todo-show-inputs">
              <div id="todo-show-notes">Notes</div>
              <div id="todo-show-notes-clickable" onClick={this.editFormVisible} className={klassName} >{noteInitVal}</div>
            </nav>
          </div>
          <div id="update-form-centering">
            <form id="update-form" onSubmit={this.handleForm}  className="hide-boi-not-important">
              <div id="update-form-title-container"><div>Title</div><input id="the-title-input" onChange={this.handleTitleChange} value={this.state.title} /></div>
              <div id="update-form-description-container"><div>Notes</div><input id="the-description-input" onChange={this.handleDescriptionChange} value={this.state.note} /></div>
              
              <div id="update-form-flex-row">
                <input type="image" src={window.save_changes}/>
                <div onClick={this.handleDiscard}>
                  <img src={window.discard_changes}/>
                </div>
              </div>
            </form>
          </div>
        </div>


      </div>


    )
  }
}

export default TodoShow

/*

      <div>
        I'm here
        <h1>{this.props.todo.title}</h1>
        <h3>{this.props.todo.description}</h3>
        <h4>{this.props.todo.done}</h4>
      </div>

*/