import React from 'react';
import { connect } from 'react-redux';
import { fetchProject } from '../../actions/project_actions';
import { Redirect, Link } from 'react-router-dom';


class ProjectIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { toProjectShow: false, toProjectEdit: false };
    this.handleShowMore = this.handleShowMore.bind(this);
  } 

  handleClick() {
    this.setState({toProjectShow: true});
  }

  handleShowMore() {
    this.setState({toProjectEdit: true});
  }
  render() {
    if (this.state.toProjectEdit){
      return <Redirect to={`/projects/${this.props.project.id}/edit`}/>;
    } else if (this.state.toProjectShow === true) {
      return <Redirect to={`/projects/${this.props.project.id}`}/>
    } 

    return (
      <li onClick={this.handleClick} key={this.props.key} className="index-item-container">
        <div onClick={this.handleShowMore}> 
          <img id="show-more-index" src={window.show_more_index}/>
        </div>
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