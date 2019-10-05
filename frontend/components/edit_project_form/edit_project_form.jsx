


import React from 'react';
import NavBar from '../nav_bar/nav_bar_container';
import { Link } from 'react-router-dom';

class EditProjectForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const title = document.getElementById("update-this-project").value;
    const description = document.getElementById("update-description").value;
    this.props.updateProject({ title: `${title}`, description: `${description}`, user_id: `${this.props.currentUser.id}` })
      .then(this.props.history.push('/projects'))

  }
}

export default EditProjectForm;