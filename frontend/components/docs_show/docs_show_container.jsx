import React from 'react';
import { connect } from 'react-redux';
import DocsShow from './docs_show';
import { fetchPhotoUpload, deletePhotoUpload, fetchPhotoUploads } from '../../actions/photo_upload_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    projectId: ownProps.match.params.projectId,
    photoUploadId: ownProps.match.params.docsId,
    photoUpload: state.entities.photoUploads.uploads,
    currentUser: state.entities.users[state.session.id],    
    projectTitle: state.entities.photoUploads.project_title,
    fetched: state.entities.photoUploads.fetched,
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchPhotoUploads: (projectId) => dispatch(fetchPhotoUploads(projectId)),
    deletePhotoUpload: (id) => dispatch(deletePhotoUpload(id)),
    fetchPhotoUpload: (uploadId) => dispatch(fetchPhotoUpload(uploadId)),
    logout: () => dispatch(logout()),
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(DocsShow);