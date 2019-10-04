import React from 'react';
import { connect } from 'react-redux';
import { fetchProject } from '../../actions/project_actions';

class ProjectIndexItem extends React.Component {


  render() {
    return (
      <li key={this.props.key} className="index-item-container">
        <img id="show-more-index" src={window.show_more_index}/>
        <h1 id="index-item-title" >{this.props.project.title}</h1>
        <h2 id="index-item-description">{this.props.project.description}</h2>
        <div id="profile-picture" className="circle-on-index-item">{this.props.currentUser.username.charAt(0).toUpperCase()}</div>
      </li>
    )
  }
}

const mapStateToProp = (state, ownProps) => {
  return ({
    currentUser: state.entities.users[state.session.id]
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
  })
}

export default connect(mapStateToProp, mapDispatchToProps)(ProjectIndexItem)