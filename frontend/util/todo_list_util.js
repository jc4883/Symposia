export const fetchTodoLists = (project_id) => {
  return $.ajax({
    method: "GET",
    url: `api/projects/${project_id}/todo_lists`,
    data: { todo_list: {project_id} }
  })
}

export const createTodoList = (todoList) => {
  return $.ajax({
    method: "POST",
    url: `api/projects/${todoList.project_id}/todo_lists`,
    data: { todo_list: todoList }
  })
}
export const fetchTodoList = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/todo_lists/${id}`,
    data: {}
  })
}

export const updateTodoList = (todoList) => {
  return $.ajax({
    method: "PATCH",
    url: `api/projects/${todoList.project_id}/todo_lists/${todoList.id}`,
    data: { todo_list: todoList }
  })
}

export const deleteTodoList = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/todo_lists/${id}`
  })
}

