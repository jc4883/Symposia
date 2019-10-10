class Api::PhotoUploadsController < ApplicationController
  def index 
    debugger
    project = Project.find_by(id: params[:project_id]);
    @photo_uploads = project.photo_uploads
    render "api/photo_uploads/index"
  end

  def create
    debugger
    photo_upload = PhotoUpload.new(photo_upload_params)
    debugger
    if photo_upload.save
      debugger
      render json: ["successful photo save"]
    else 
      render json: photo_upload.errors.full_messages
    end

  end

  private

  def photo_upload_params 
    params.require(:photo_upload).permit(:title, :description, :project_id, :photo)
  end
  
end
