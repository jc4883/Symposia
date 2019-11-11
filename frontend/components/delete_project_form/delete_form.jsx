import React from 'react';
import { withRouter } from 'react-router-dom';
import NavBar from '../nav_bar/nav_bar_container';
import { Link, Redirect } from 'react-router-dom';
import { logout } from '../../actions/session_actions';

class DeleteForm extends React.Component {
  constructor(props) {
    super(props);
        
    this.state =  Object.assign(this.props.project, {toProjectIndex: false});
    this.title = this.props.project.title;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.deleteProject(this.props.project.id)
      .then(this.setState({toProjectIndex: true}));
  }


  render() {

    if (this.state.toProjectIndex) {
      return <Redirect to={`/projects`} />
    }

    return (
      <div id="big-delete-project-container">
        <NavBar history={this.props.history} currentUser={this.props.currentUser} logout={this.props.logout} />
        <nav id="project-title-for-delete">
          
          <div id="for-delete-container" onClick={this.handleRedirect}>
            <img src={window.update_project_icon}/>
            <div>{this.title}</div>
          </div>
        </nav>

        <div id="delete-project-div">
          <h1>Permanently delete <span id="highlight-project-title">{this.title}</span>?</h1>
          <p>
            Once you hit delete, you will no longer have access to this project or any files you’ve uploaded to this project. <strong>There is no undo.</strong>
          </p>

          <button onClick={this.handleSubmit} id="delete-button">Delete this project</button>

        </div>
        


      </div>
    )
  }
}

export default DeleteForm;