import React from 'react';
import NavBar from '../nav_bar/nav_bar_container';
import { Link } from 'react-router-dom';



class ShowProject extends React.Component {

  constructor(props) {
    super(props);
    debugger
    this.monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
    this.handleDropdown = this.handleDropdown.bind(this)
    this.handleTodo = this.handleTodo.bind(this);
    this.handleDocs = this.handleDocs.bind(this);
    this.handleSchedule = this.handleSchedule.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleEditClick() {
    debugger
    this.props.history.push(`/projects/${this.props.project.id}/edit`);
  }

  handleDeleteClick() {
    debugger
    this.props.history.push(`/projects/${this.props.project.id}/status`);
  }
 
  componentDidMount() {
    this.props.fetchProject(this.props.projectId);
  }

  handleTodo() {
    this.props.history.push("/")
  }

  handleSchedule(){
    this.props.history.push("/")
  }

  handleDocs() {
    this.props.history.push("/") 
  }



  handleDropdown() {
    document.getElementById("show-dropdown").classList.toggle("show-show");
  }  

  render() {
    debugger;
    if (!this.props.project) {
      return null;
    }
    let dateStr = this.props.project.created_at;
    dateStr = dateStr.slice(0, -1);
    let date = new Date(dateStr);
    let day = date.getDate();
    let month = this.monthNames[date.getMonth()];
    let year = date.getFullYear();
    
    return (
      <div id="show-project-div">
        <NavBar currentUser={this.props.currentUser} logout={this.props.logout} />



        <div id="show-project-container">
          <div id="got-to-be-positioned">
            <div onClick={this.handleDropdown}>
              <img id="show-more-project-show" src={window.show_more_project_show}/>
            </div>

            <div id="show-dropdown" className="show-dropdown-content">
                <div id="show-dropdown-close-container">
                  <div id="show-dropdown-close" onClick={this.handleDropdown}> 
                    <img src={window.project_show_dropdown}/>
                  </div>
                </div>
              
                <div onClick={this.handleEditClick} id="project-show-edit">
                  <img src={window.project_show_edit}/>
                  <h4>Edit name, description, type</h4>
                </div>
                <div onClick={this.handleDeleteClick} id="project-show-delete">
                  <img src={window.project_show_delete}/>
                  <h4>Delete this project</h4>
                </div>
            </div>
          </div>

     




          <header id="show-project-header">
            <div className="project-name">{this.props.project.title}</div>
            <h4 id="project-show-description">{this.props.project.description}</h4>
            <ul id="project-show-invite">
              <li id="project-show-circle" className="circle">
                {this.props.currentUser.username.charAt(0).toUpperCase()}               
              </li>
              <li>
                <button id="project-show-invite-button">
                  Invite some people
                </button>
              </li>
            </ul>
          </header>
          <div id="main-grid">
            <div className="todo_images">
              <div onClick={this.handleTodo}  id="project_show_todo">
                <img src={window.project_show_todo}/>
              </div>
              <div onClick={this.handleSchedule} id="project_show_schedule">
                <img src={window.project_show_schedule}/>
              </div>
              <div onClick={this.handleDocs} id="project_show_docs">
                <img src={window.project_show_docs} />
              </div>
            </div>
          </div>
          <div id="project-activity-line-container">
            <h2 className="project-activity-line"><span id="project-activity-show"></span></h2>
          </div>
          <div id="activity-body">
            <h2 className="project-activity-line"></h2>
          </div>
          <img id="show-project-symposia-logo" src={window.transparent_symposia_logo} />
          <div id="misc-info">
            <h2>Welcome to {this.props.project.title}!</h2>
            <h4>{this.props.currentUser.username} created this {month} {day}, {year}</h4>
            <p>This is the place to do everything related to this project — make plans, discuss progress, and get work done.</p>
            <div>
              <a href="/no/where">Learn more about the tools above</a>
              &nbsp;
              •
              &nbsp;
              <a href="/no/where">Need a hand with anything? We're standing by!</a>
            </div>
            
            <p>Make a Great Symposium!</p>
          </div>
        </div>
      </div>
    )
  }
}



const DropDown = ({}) => {
  return (
    <nav>
      <ul id="drop-ul">
        <li><div>1</div></li>
        <li><div>2</div></li>
        <li><div>3</div></li>
      </ul> 
    </nav>
  )
}



export default ShowProject;

