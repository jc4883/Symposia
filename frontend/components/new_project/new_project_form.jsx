import React from 'react';
import NavBar from '../nav_bar/nav_bar';
import { Link } from 'react-router-dom';


class NewProjectForm extends React.Component {
  
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    window.scrollTop = 0;
  }


  handleSubmit(e) {
    e.preventDefault();
    const title = document.getElementById("name-this-project").value;
    const description = document.getElementById("add-description").value;
    const projectId = 
    this.props.createProject({title: `${title}`, description: `${description}`, user_id: `${this.props.currentUser.id}`})
      .then(this.props.history.push('/projects'))
    
  }

  render() {
    return (
      <div id="new-project-div">
        <div id="new-project-container">
          <NavBar history={this.props.history} history={this.props.history} currentUser={this.props.currentUser} logout={this.props.logout} />
          <img id="new-project-symposia-logo" src={window.transparent_symposia_logo} />
          <h2>All right, let's get your project started!</h2>
          <form onSubmit={this.handleSubmit} id="new-project-form">
            <h3>Name this Project</h3>
            <input autoFocus="autofocus" placeholder="e.g. Allegory of the Cave"  id="name-this-project" type="text" required/>
            <h3>Add an optional description</h3>
            <textarea placeholder="e.g. Watch the process whereby the prisoners are set free from their chains." id="add-description" type="text"/>
            <button id="create-button">Create this project</button>
          </form>
        </div>
      </div>
    )
  }


}


export default NewProjectForm;