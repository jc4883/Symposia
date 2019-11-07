class Api::PhotoUploadsController < ApplicationController
  def index 
    project = Project.find_by(id: params[:project_id])
    @photo_uploads = project.photo_uploads

    render "api/photo_uploads/index"
    
  end

  def create
    @photo_upload = PhotoUpload.new(photo_upload_params)
    if @photo_upload.save
      render "api/photo_uploads/show"
    else 
      render json: @photo_upload.errors.full_messages
    end
  end

  def show
    @photo_upload = PhotoUpload.find(params[:id])
    render "api/photo_uploads/show"
  end

  private

  def photo_upload_params 
    params.require(:photo_upload).permit(:title, :description, :project_id, :photo)
  end
  
end
