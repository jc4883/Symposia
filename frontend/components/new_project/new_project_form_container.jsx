import React from 'react';
import NewProjectForm from './new_project_form';
import { connect } from 'react-redux';
import { createProject } from '../../actions/project_actions'

const mapStateToProps = (state) => {
  return ({

  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    createProject: (project) => dispatch(createProject(project))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(NewProjectForm)