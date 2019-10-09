class Api::TodoListsController < ApplicationController
  def index
    project = Project.find_by(id: params[:project_id])

    @todo_lists = project.todo_lists
    render "api/todo_lists/index"
  end

  def create 
    @todo_list = TodoList.new(todo_list_params)
    if @todo_list.save
      render "api/todo_lists/show"
    else
      render json: ["Try creating the todo list at a later time."]
    end
  end

  def destroy 
    @todo_list = TodoList.find_by(id: params[:id])
    @todo_list.destroy
    render "api/todo_lists/show"
  end

  def show
    @todo_list = TodoList.find_by(id: params[:id])
    render "api/todo_lists/show"
  end

  def update
    @todo_list = TodoList.find(params[:id])
    if @todo_list.update_attributes(todo_list_params)
      render "api/todo_lists/show"
    else
      render json: ["unable to update todo list"]
    end
  end




private
  def todo_list_params
    params.require(:todo_list).permit(:title, :description, :project_id)
  end
end
