import React from 'react';
import ProjectIndex from './project_index';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions'
import { 
  fetchProjects, 
  fetchProject, 
  createProject, 
  updateProject, 
  deleteProject } from '../../actions/project_actions';


const mapStateToProp = (state, ownProps) => {
  return ({
    projects: state.entities.projects,
    currentUser: state.entities.users[state.session.id]
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: () => dispatch(logout()),
    fetchProjects: () => dispatch(fetchProjects()),
    fetchProject: (id) => dispatch(fetchProject(id)),
    createProject: (project) => dispatch(createProject(project)),
    updateProject: (project) => dispatch(updateProject(project)),
    deleteProject: (id) => dispatch(deleteProject(id)),
  })
}

export default connect(mapStateToProp, mapDispatchToProps)(ProjectIndex)