import React from 'react';
import ProjectIndex from './project_index';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions'

const mapStateToProp = (state, ownProps) => {
  return ({
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: () => dispatch(logout())
  })
}

export default connect(mapStateToProp, mapDispatchToProps)(ProjectIndex)