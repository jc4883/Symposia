import React from 'react';
import { withRouter } from 'react-router-dom';
import NavBar from '../nav_bar/nav_bar_container';
import { Link, Redirect } from 'react-router-dom';
import { logout } from '../../actions/session_actions';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state =  Object.assign(this.props.project, {toProjectShow: false});
    this.title = this.props.project.title;
    this.handleHistoryPush = this.handleRedirect.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateField(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleRedirect() {

    this.setState({toProjectShow: true});
  }

  handleSubmit(e) {
    e.preventDefault();
    const title = document.getElementById("update-this-project").value;
    const description = document.getElementById("update-description").value;
    this.props.updateProject({id: `${this.props.project.id}`, title: `${title}`, description: `${description}`, user_id: `${this.props.currentUser.id}` })
      .then(this.setState({toProjectShow: true}))
  }

  render () {
    if (this.state.toProjectShow) {
      return <Redirect to={`/projects/${this.props.project.id}`} />
    }

    return (
      
      <div id="big-edit-project-container">
        <NavBar history={this.props.history} currentUser={this.props.currentUser} logout={this.props.logout} />
        <nav id="project-title-for-update">
          
          <div id="for-update-container" onClick={this.handleRedirect}>
            <img src={window.update_project_icon}/>
            <div>{this.title}</div>
          </div>
        </nav>

        <div id="edit-project-div">  
          <h2>Edit details for this project</h2>
          <form id="new-project-form">

            <section id="new-project-form-first-child">
              <h3 id="update-project-first-h3">Name</h3>
              <input onChange={this.updateField("title")} value={this.state.title} autoFocus="autofocus"  id="update-this-project" type="text"  />
            </section>

            <section>
              <h3 id="description-h3">Description (optional)</h3>
              <textarea onChange={this.updateField("description")} value={this.state.description} id="update-description" type="text"/>
            </section>

            <button onClick={this.handleSubmit} className="update-button">Save Changes</button>
          </form>
        </div>
      </div>
    )
  }
}

export default ProjectForm;
