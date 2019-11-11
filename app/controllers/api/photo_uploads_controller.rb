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
    # @url = rails_blob_url(@photo_upload.photo, disposition: "attachment")
    if @photo_upload.photo.image?
      @is_image = true
    else
      @is_image = false
    end
    render "api/photo_uploads/show"
  end
  
  def destroy
    @delete = true
    @photo_upload = PhotoUpload.find(params[:id])
    @photo_upload.photo.purge
    @photo_upload.destroy
    render "api/photo_uploads/show"
  end

  # def my_url
  # end

  private

  def photo_upload_params 
    params.require(:photo_upload).permit(:title, :description, :project_id, :photo)
  end
  
end
