export const signup = user =>
  $.ajax({
    method: "POST",
    url: "api/users",
    data: {
      user
    }
  });

export const login = user =>
  $.ajax({
    method: "POST",
    url: "api/session",
    data: {
      user
    }
  });

export const logout = () =>
  $.ajax({
    method: "DELETE",
    url: "api/session"
  });

export const validateUsername = (username) => {
  return $.ajax({
    method: "POST",
    url: "api/sessions/validate_username",
    data: { 
      user: { username }
    }
  });
}




  //validate(), hits validate_username

  //passClass, action, state.phase

  //passClass: hide-pass or show-pass
  

  //  input {
  //    transition: display .5s
  //  }