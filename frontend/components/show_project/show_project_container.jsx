import React from 'react';
import ShowProject from './show_project';
import { connect } from 'react-redux';
import { fetchProject } from '../../actions/project_actions'
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
    fetchProject: (id) => dispatch(fetchProject(id))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowProject);