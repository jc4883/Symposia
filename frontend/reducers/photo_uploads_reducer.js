import { RECEIVE_ALL_PHOTO_UPLOADS, RECEIVE_PHOTO_UPLOAD } from '../actions/photo_upload_actions';

const photoUploadsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_PHOTO_UPLOADS:
    debugger
      return Object.assign(action.photoUploads, state )
    case RECEIVE_PHOTO_UPLOAD:
      const key = Object.keys(action.photoUpload.uploads)[0];
      //return Object.assign({project_title : action.photoUpload.project_title}, {created_at : action.photoUpload.created_at}, {uploads : Object.assign(state.uploads, {[action.photoUpload.uploads[key].id] : action.photoUpload.uploads[key]})} )

      if (!state.uploads) {
        return Object.assign({project_title : action.photoUpload.project_title}, {created_at : action.photoUpload.uploads[key].created_at}, {uploads : {[action.photoUpload.uploads[key].id] : action.photoUpload.uploads[key] }} )
      } else {
        return Object.assign({project_title : action.photoUpload.project_title}, {created_at : action.photoUpload.uploads[key].created_at}, {uploads : Object.assign(state.uploads, {[action.photoUpload.uploads[key].id] : action.photoUpload.uploads[key]})} )
      }

      
    default: 
      return state;
  }
}

export default photoUploadsReducer;