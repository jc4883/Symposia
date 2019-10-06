import React from 'react';
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import * as sessionActions from './actions/session_actions';
import * as projectsActions from './actions/project_actions';
import * as todoListActions from './actions/todo_list_actions';
import * as todoActions from './actions/todo_actions';

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
  window.todoListActions = todoListActions;
  window.todoActions = todoActions;
  //createTodoList works
  //fetchTodos works
  //fetchTodo works
  //updateTodo works
  //destroyTodo works
  // TESTING END

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});