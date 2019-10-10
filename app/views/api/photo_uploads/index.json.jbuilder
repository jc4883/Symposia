@photo_uploads.each do |photo_upload|
  json.set! photo_upload.id do 
    json.extract! photo_upload, :id, :title, :description, :project_id
    json.photoUrl url_for(photo_upload.photo)
  end
end