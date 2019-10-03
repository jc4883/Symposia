import React from 'react';
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import * as sessionActions from './actions/session_actions';
import * as projectsActions from './actions/project_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) { //bootstrapping occurs before DOMContentLoad
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.sessionActions = sessionActions;
  window.projectsActions = projectsActions;
  //createProject works 
  //fetchPosts() works {0: {…}, 1: {…}, 2: {…}, 3: {…}}
  //fetchPost(1) works {1: {…}}
  // TESTING END

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});