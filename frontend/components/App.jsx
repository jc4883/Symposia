import React from 'react';
import GreetingContainer from "./greeting/greeting_container";
import { Route } from 'react-router-dom'
import login_form_container from './session_form/login_form_container';
import signup_form_container from './session_form/signup_form_container';

const App = () => (
  <div>
    <header>
      <h1>Symposia!</h1>
      <GreetingContainer />
      <Route path="/login" component={login_form_container}/>
      <Route path="/signup" component={signup_form_container}/>
    </header>
  </div>
);

export default App;