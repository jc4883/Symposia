import React from 'react';
import { login, validateUsername } from '../../actions/session_actions'
import LoginForm from './login_form'
import { connect } from 'react-redux';



const mapStateToProp = (state, ownProps) => {
  return ({
    errors: state.errors.session,
    formType: 'login'
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    processForm: (user) => dispatch(login(user)),
    validateUsername: (username) => dispatch(validateUsername(username))
  })
}


export default connect(mapStateToProp, mapDispatchToProps)(LoginForm);
