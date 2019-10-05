import React from 'react';
import { Provider } from 'react-redux';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import ProjectIndexContainer from './project/project_index_container';
import NewProjectFormContainer from './new_project/new_project_form_container';
import ShowProjectContainer from './show_project/show_project_container';
import EditProjectFormContainer from './edit_project_form/edit_project_form_container';
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
      <ProtectedRoute exact path="/project/:projectId" component={ShowProjectContainer} />
      <ProtectedRoute exact path="/projects/:projectId/edit" component={EditProjectFormContainer} />
    </Switch>
    
    
  </div>
);

export default App;




