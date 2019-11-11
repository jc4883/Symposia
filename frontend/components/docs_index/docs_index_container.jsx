import React from 'react';
import DocsIndex from './docs_index';
import { connect } from 'react-redux';
import { fetchPhotoUploads } from '../../actions/photo_upload_actions'; 
import { logout } from '../../actions/session_actions';
import { createPhotoUpload, fetchPhotoUpload } from '../../actions/photo_upload_actions';



const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.entities.users[state.session.id],
    projectId: ownProps.match.params.projectId,
    photoUploads: state.entities.photoUploads.uploads,
    projectTitle: state.entities.projects[ownProps.match.params.projectId].title,
  })
}

/* photoUploads: state.entites.photoUploads, */

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchPhotoUpload: (id) => dispatch(fetchPhotoUpload(id)),
    fetchPhotoUploads: (projectId) => dispatch(fetchPhotoUploads(projectId)),
    createPhotoUpload: (projectId, formData) => dispatch(createPhotoUpload(projectId, formData)),
    logout: () => dispatch(logout()),
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(DocsIndex);