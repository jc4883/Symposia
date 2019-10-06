class Api::ProjectsController < ApplicationController

  def index
    @projects = current_user.projects
    render "api/projects/index"
  end

  def create
    @project = Project.new(project_params)
    if @project.save
      render "api/projects/show"
    else
      render json: ["Try creating the project at a later time."]
    end
  end

  def destroy
    @project = Project.find_by(id: params[:id])
    @project.destroy
    render "api/projects/show"
  end

  def show
    @project = Project.find_by(id: params[:id])
    render "api/projects/show"
  end


  def update
    @project = Project.find(params[:id]) 
    if @project.update_attributes(project_params)
      render "api/projects/show"
    else
      render json: ["unable to update project"]
    end
  end

private
  def project_params
    params.require(:project).permit(:title, :description, :user_id)
  end
end
