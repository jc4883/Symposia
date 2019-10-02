import React from 'react';
import { Provider } from 'react-redux';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import ProjectIndexContainer from './project/project_index_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash/splash'
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
      <Route exact path="/" component={Splash}/>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute exact path="/projects" component={ProjectIndexContainer} />
    </Switch>
    
    
  </div>
);

export default App;




