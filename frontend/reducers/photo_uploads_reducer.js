import { REMOVE_PHOTO_UPLOAD, RECEIVE_ALL_PHOTO_UPLOADS, RECEIVE_PHOTO_UPLOAD } from '../actions/photo_upload_actions';

const photoUploadsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case REMOVE_PHOTO_UPLOAD:
      let newState = Object.assign({}, state);
      delete newState.uploads[action.photoUploadId];
      return newState;
    case RECEIVE_ALL_PHOTO_UPLOADS:
      return Object.assign(action.photoUploads, state )
    case RECEIVE_PHOTO_UPLOAD:
      const key = Object.keys(action.photoUpload.uploads)[0];
      // let uploads = Object.assign(state.photoUpload.uploads, action.photoUpload.uploads)
      //return Object.assign({project_title : action.photoUpload.project_title}, {uploads : Object.assign(state.uploads, {[action.photoUpload.uploads[key].id] : action.photoUpload.uploads[key]})} )
      let object = Object.assign({project_title : action.photoUpload.project_title}, {created_at : action.photoUpload.uploads[key].created_at}, {uploads : Object.assign(state.uploads, {[action.photoUpload.uploads[key].id] : action.photoUpload.uploads[key]})     } );
      let object2 = Object.assign(object, {fetched: false})
      return object;
      
    default: 
      return state;
  }
}

export default photoUploadsReducer;