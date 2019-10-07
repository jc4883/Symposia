import React from 'react';
import { Provider } from 'react-redux';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import ProjectIndexContainer from './project/project_index_container';
import NewProjectFormContainer from './new_project/new_project_form_container';
import ShowProjectContainer from './show_project/show_project_container';
import EditProjectFormContainer from './edit_project_form/edit_project_form_container';
import TodoListIndexContainer from './todo_list_index/todo_list_index_container';
import TodoListShowContainer from './todo_list_show/todo_list_show_container';
import TodoShowContainer from './todo_show/todo_show_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash/splash';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/" component={Splash}/>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute exact path="/projects" component={ProjectIndexContainer} />
      <ProtectedRoute exact path="/projects/new" component={NewProjectFormContainer} />
      <ProtectedRoute exact path="/projects/:projectId" component={ShowProjectContainer} />
      <ProtectedRoute exact path="/projects/:projectId/edit" component={EditProjectFormContainer} />
      <ProtectedRoute exact path="/projects/:projectId/todo_lists" component={TodoListIndexContainer}/>
      <ProtectedRoute exact path="/todo_lists/:todoListId" component={TodoListShowContainer} />
      <ProtectedRoute exact path="/todo_lists/:todoListId/todos/:todoId" component={TodoShowContainer} />
    </Switch>
    
    
  </div>
);

export default App;




