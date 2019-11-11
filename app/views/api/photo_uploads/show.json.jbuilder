json.set! :project_title, @photo_upload.project.title
json.set! :uploads do
  json.set! @photo_upload.id do
    json.extract! @photo_upload, :id, :title, :description, :project_id, :created_at
    if @delete != true
      json.photoUrl url_for(@photo_upload.photo)
      json.railsBlobUrl rails_blob_url(@photo_upload.photo, disposition: "attachment")
      json.is_image @is_image
    end
  end
end