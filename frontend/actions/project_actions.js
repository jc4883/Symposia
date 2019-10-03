import * as API_Project_Util from '../util/project_api_util';

export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';


const receiveProjects = (projects) => {
  return ({
    type: RECEIVE_ALL_PROJECTS,
    projects
  })
}

const receiveProject = (project) => {
  return ({
    type: RECEIVE_PROJECT,
    project,
  })
}

const removeProject = (id) => {
  return ({
    type: REMOVE_PROJECT,
    projectId: id,
  })
}

export const fetchProjects = () => dispatch => {
  return API_Project_Util.fetchProjects().then(projects => {
    return dispatch(receiveProjects(projects));
  })
}

export const fetchProject = (id) => dispatch => {
  return API_Project_Util.fetchProject(id).then(project => {
    return dispatch(receiveProject(project));
  })
}

export const createProject = (project) => dispatch => {
  return API_Project_Util.createProject(project).then(project => {
    return dispatch(receiveProject(project))
  });
}

export const updateProject = (project) => dispatch => 
  API_Project_Util.updateProject(project).then(project => dispatch(receiveProject(project)))

export const deleteProject = (id) => dispatch => 
  API_Project_Util.deleteProject(id).then(project => dispatch(removeProject(project.id)))