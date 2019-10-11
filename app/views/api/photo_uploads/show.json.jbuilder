json.set! :project_title, @photo_upload.project.title

json.set! :uploads do
  json.set! @photo_upload.id do
    json.extract! @photo_upload, :id, :title, :description, :project_id, :created_at
    json.photoUrl url_for(@photo_upload.photo)
  end
end