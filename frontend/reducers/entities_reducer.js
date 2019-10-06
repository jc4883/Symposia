import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import projectsReducer from './projects_reducer';
import todoListsReducer from './todo_lists_reducer';
import todosReducer from './todos_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  projects: projectsReducer,
  todoLists: todoListsReducer,
  todos: todosReducer,
});

export default entitiesReducer;
