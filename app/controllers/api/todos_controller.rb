class Api::TodosController < ApplicationController

  def index
    @todos = Todo.find_by(todo_list_id: params[:todo_list_id])
    render "api/todos/index"
  end

  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      render "api/todos/show"
    else   
      render json: ["Try creating the todo at a later time"]
    end
  end 

  def destroy
    @todo = Todo.find_by(id: params[:id])
    @todo.destroy
    render "api/todos/show"
  end

  def show
    @todo = Todo.find_by(id: params[:id])
    render "api/todos/show"
  end

  def update
    @todo = Todo.find(params[:id])
    if @todo.update_attributes(todo_params)
      render "api/todos/show"
    else 
      render json: ["unable to update todo"]
    end
  end


private

  def todo_params
    params.require(:todo).permit(:title, :description, :todo_list_id, :done)
  end

end
