import * as API_Photo_Upload_Util from '../util/photo_upload_util';
export const RECEIVE_ALL_PHOTO_UPLOADS = "RECEIVE_ALL_PHOTO_UPLOADS";
export const RECEIVE_PHOTO_UPLOAD = "RECEIVE_PHOTO_UPLOAD";
export const REMOVE_PHOTO_UPLOAD = "REMOVE_PHOTO_UPLOAD";

const receivePhotoUploads = (photoUploads) => {
  return ({
    type: RECEIVE_ALL_PHOTO_UPLOADS,
    photoUploads
  })
}

const receivePhotoUpload = (photoUpload) => {
  return ({
    type: RECEIVE_PHOTO_UPLOAD,
    photoUpload
  })
}

const removePhotoUpload = (id) => {
  return ({
    type: REMOVE_PHOTO_UPLOAD,
    photoUploadId: id,
  })
}


export const fetchPhotoUpload = (id) => dispatch => {
  return API_Photo_Upload_Util.fetchPhotoUpload(id)
    .then(photoUpload => {
      return dispatch(receivePhotoUpload(photoUpload));
    })
}

export const fetchPhotoUploads = (projectId) => dispatch => {
  return API_Photo_Upload_Util.fetchPhotoUploads(projectId)
    .then(photoUploads => {
      return dispatch(receivePhotoUploads(photoUploads));
    })
}

export const createPhotoUpload = (projectId, formData) => dispatch => {
  return API_Photo_Upload_Util.createPhotoUpload(projectId, formData)
    .then(photoUpload => {
      return dispatch(receivePhotoUpload(photoUpload));
    })
}

export const deletePhotoUpload = (id) => dispatch => {
  return API_Photo_Upload_Util.deletePhotoUpload(id)
    .then(photoUpload =>{
      return dispatch(removePhotoUpload(id))
    })
}
