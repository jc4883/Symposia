import React from 'react';
import DocsIndex from './docs_index';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return ({
    projectId: ownProps.match.params.projectId
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({

  })
}

export default connect(mapStateToProps, mapDispatchToProps)(DocsIndex);