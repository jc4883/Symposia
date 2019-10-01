import React from 'react';
import { login } from '../../actions/session_actions'
import SessionForm from './session_form'
import { connect } from 'react-redux';



const mapStateToProp = (state, ownProps) => {
  return ({
    errors: state.errors.session,
    formType: 'login'
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    processForm: (user) => dispatch(login(user))
  })
}


export default connect(mapStateToProp, mapDispatchToProps)(SessionForm);
