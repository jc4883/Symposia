import React from 'react';
import NavBar from '../nav_bar/nav_bar';
import { Link } from 'react-router-dom';


class NewProjectForm extends React.Component {
  
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    //this.props.createProject({title: `${}`, description: `${}`, user_id: `${}`})
    console.log("here")
  }

  render() {
    return (
      <div id="new-project-div">
        <div id="new-project-container">
          <NavBar currentUser={this.props.currentUser} logout={this.props.logout} />
          <img id="new-project-symposia-logo" src={window.transparent_symposia_logo} />
          <h2>All right, let's get your project started!</h2>
          <form id="new-project-form" onSubmit={this.handleSubmit}>
            <h3>Name this Project</h3>
            <input autoFocus="autofocus" placeholder="e.g. Allegory of the Cave"  id="name-this-project" type="text"/>
            <h3>Add an optional description</h3>
            <textarea placeholder="e.g. Watch the process whereby the prisoners are set free from their chains." id="add-description" type="text"/>
            <Link to="/projects">
              <button id="create-button">Create this project</button>
            </Link>
          </form>
        </div>
      </div>
    )
  }


}


export default NewProjectForm;