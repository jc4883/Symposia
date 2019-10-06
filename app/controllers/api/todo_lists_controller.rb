class Api::TodoListsController < ApplicationController
  def index
    debugger
    project = Project.find_by(id: params[:project_id])
    @todo_lists = project.todo_lists
    debugger
    render "api/todo_lists/index"
  end

  def create 
    debugger
    @todo_list = TodoList.new(todo_list_params)
    debugger
    if @todo_list.save
      debugger
      render "api/todo_lists/show"
    else
      debugger
      render json: ["Try creating the todo list at a later time."]
    end
  end

  def destroy 
    @todo_list = TodoList.find_by(id: params[:id])
    @todo_list.destroy
    render "api/todo_lists/show"
  end

  def show
    debugger
    @todo_list = TodoList.find_by(id: params[:id])
    debugger
    render "api/todo_lists/show"
  end

  def update
    debugger
    @todo_list = TodoList.find(params[:id])
    debugger
    if @todo_list.update_attributes(todo_list_params)
      debugger
      render "api/todo_lists/show"
    else
      debugger
      render json: ["unable to update todo list"]
    end
  end




private
  def todo_list_params
    params.require(:todo_list).permit(:title, :description, :project_id)
  end
end
