import React from 'react';
import { signup } from '../../actions/session_actions'
import { connect } from 'react-redux';
import SessionForm from './session_form'

const mapStateToProp = (state, ownProps) => {
  return ({
    errors: state.errors.session,
    formType: 'signup'
  })
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    processForm: (user) => dispatch(signup(user))
  })
}

export default connect(mapStateToProp, mapDispatchToProps)()

