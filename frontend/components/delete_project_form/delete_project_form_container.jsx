import React from 'react';
import DeleteProjectForm from './delete_project_form';
import { connect } from 'react-redux';
import { deleteProject, fetchProject } from '../../actions/project_actions'
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
    deleteProject: (id) => dispatch(deleteProject(id)),
    fetchProject: (id) => dispatch(fetchProject(id))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteProjectForm)