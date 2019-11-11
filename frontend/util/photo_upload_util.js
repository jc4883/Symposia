export const fetchPhotoUploads = (projectId) => {
  return $.ajax({
    method: "GET",
    url: `/api/projects/${projectId}/photo_uploads`
  })
}

export const createPhotoUpload = (projectId, formData) => {
  return $.ajax({
    method: "POST",
    url: `/api/projects/${projectId}/photo_uploads`,
    data: formData,
    contentType: false,
    processData: false,
  })
}

export const deletePhotoUpload = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/photo_uploads/${id}`,
  })
}

export const fetchPhotoUpload = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/photo_uploads/${id}`
  })
}