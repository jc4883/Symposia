import React from 'react';
import EditProjectForm from './edit_project_form';
import { connect } from 'react-redux';
import { updateProject, fetchProject } from '../../actions/project_actions'
import { logout } from '../../actions/session_actions'


const mapStateToProps = (state, ownProps) => {
  return ({
    projectId: ownProps.match.params.projectId,
    currentUser: state.entities.users[state.session.id],
    project: state.entities.projects[ownProps.match.params.projectId]
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: () => dispatch(logout()),
    createProject: (project) => dispatch(updateProject(project)),
    fetchProject: (id) => dispatch(fetchProject(id))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProjectForm)