import React from 'react';
import { connect } from 'react-redux';
import DocsShow from './docs_show';
import { fetchPhotoUpload } from '../../actions/photo_upload_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    projectId: ownProps.match.params.projectId,
    photoUploadId: ownProps.match.params.docsId,
    photoUpload: state.entities.photoUploads.uploads,
    currentUser: state.entities.users[state.session.id],    
    projectTitle: state.entities.photoUploads.project_title,
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchPhotoUpload: (uploadId) => dispatch(fetchPhotoUpload(uploadId)),
    logout: () => dispatch(logout()),
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(DocsShow);