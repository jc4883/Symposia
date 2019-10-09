json.todoList do 
  json.set! @todo_list.id do 
    json.partial! 'todo_list', todo_list: @todo_list

    json.todos do
      json.array! @todo_list.todos, :id
    end
  end
end


json.todos do
  @todo_list.todos.each do |todo|
    json.set! todo.id do
      json.partial! 'api/todos/todo', todo: todo
    end
  end
end



