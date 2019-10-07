export const fetchTodos = (todo_list_id) => {
  return $.ajax({
    method: "GET",
    url: `api/todo_lists/${todo_list_id}/todos`
  })
}



export const createTodo = (todo) => {
  return $.ajax({
    method: "POST",
    url: `api/todo_lists/${todo.todo_list_id}/todos`,
    data: { todo }
  })
}

export const fetchTodo = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/todos/${id}`,
    data: id
  })
}

export const updateTodo = (todo) => {
  return $.ajax({
    method: "PATCH",
    url: `api/todo_lists/${todo.todo_list_id}/todo/${todo.id}`,
    data: { todo }
  })
}

export const deleteTodo = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/todos/${id}`,
  })
}