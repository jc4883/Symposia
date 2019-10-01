import React from 'react';
import GreetingContainer from "./greeting/greeting_container";
import { Route } from 'react-router-dom'
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';

const App = () => (
  <div>
    <header>
      <h1>Symposia!</h1>
      <GreetingContainer />
      <Route path="/login" component={() => <LoginFormContainer/>} />
      <Route path="/signup" component={() => <SignupFormContainer/>} />
    </header>
  </div>
);

export default App;


/* <script>
  <% if logged_in? %>
  <script type="text/javascript">
    window.currentUser = <%= render(
      "api/users/user.json.jbuilder",
      user: current_user
    ).html_safe %></script>
  <% end %>
</script>
*/





