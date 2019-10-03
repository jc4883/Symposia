export const fetchProjects = () => {
  return $.ajax({
    method: "GET",
    url: "api/projects"
  })
}

export const createProject = (project) => {
  return $.ajax({
    method: "POST",
    url: "api/projects",
    data: { project }
  })
}

export const fetchProject = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/projects/${id}`,
    data: id 
  })
}

export const updateProject = (project) => {
  debugger
  return $.ajax({
    method: "PATCH",
    url: `api/projects/${project.id}`,
    data: { project }
  })
}

export const deleteProject = (id) => {
  debugger
  return $.ajax({
    method: "DELETE",
    url: `api/projects/${id}`,
  })
}