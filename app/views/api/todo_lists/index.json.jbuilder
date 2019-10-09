json.todoLists do 
  @todo_lists.each do |todo_list|
    json.set! todo_list.id do
      json.partial! 'todo_list', todo_list: todo_list

      json.todos do 
        json.array! todo_list.todos, :id
      end
    end
  end
end

json.todos do
  @todo_lists.each do |todo_list|
    todo_list.todos.each do |todo|
      json.set! todo.id do
        json.partial! 'api/todos/todo', todo: todo
      end
    end
  end
end





