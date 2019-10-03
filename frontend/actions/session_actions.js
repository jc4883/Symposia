import * as APIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_VALIDATION = "RECEIVE_VALIDATION";
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const receiveValidation = user => ({
  type: RECEIVE_VALIDATION,
  user,
})

export const clearAllErrors = () => {
  return { type: CLEAR_ERRORS}
}


export const signup = user => dispatch =>
  APIUtil.signup(user).then(
    user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const login = user => dispatch =>
  APIUtil.login(user).then(
    user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const logout = () => dispatch =>
  APIUtil.logout().then(() => dispatch(logoutCurrentUser()));


export const clearErrors = () => dispatch => {
  return dispatch(clearAllErrors());
}




//how do we know what the request will return? error or user info? 
//validateUsername receives user because of jbuilder (render "api/users/show")
export const validateUsername = username => dispatch =>{
  return APIUtil.validateUsername(username).then(undefined,
    err => dispatch(receiveErrors(err.responseJSON))
  )
}
 

      //err => dispatch(receiveErrors(err.responseJSON)),

  //validate(), 