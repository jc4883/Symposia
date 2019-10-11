import React from 'react';
import NavBar from '../nav_bar/nav_bar';
import { Redirect } from 'react-router-dom';

class DocsShow extends React.Component {
  constructor(props) {
    super(props);
        this.monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  }

  componentDidMount() {
    this.props.fetchPhotoUpload(this.props.photoUploadId);
  }
  

  render() {
    if (!this.props.photoUpload) {
      return null;
    }
    const photoUpload = this.props.photoUpload[this.props.photoUploadId];  
    let dateStr = photoUpload.created_at;
    dateStr = dateStr.slice(0, -1);
    let date = new Date(dateStr);
    let day = date.getDate();
    let month = this.monthNames[date.getMonth()];
    let year = date.getFullYear();
    const createdAt = `${month} ${day}, ${year}`;


    return (
      <div id="big-todo-list-index-container">

              <NavBar currentUser={this.props.currentUser} logout={this.props.logout} />
              <nav id="project-title-todo-list-index">

                <div id="for-project-title-todo-list-container">
                  <img src={window.update_project_icon} />
                  <div>{this.props.projectTitle}</div>
                </div>
              </nav>

              <div id="doc-index-div" className="display-flex-doc-show"> 

                <div id="doc-show-div">
                  <img id="doc-show-image" src={photoUpload.photoUrl} />
                  <h2 id="doc-show-title">{photoUpload.title}</h2>
                  <h4 id="doc-item-description">{photoUpload.description}</h4>
                  <h4 id="doc-item-created-at">Created on
                  &nbsp;
                  {createdAt}</h4>
                </div>   

              </div>

      </div>
    )
  }
}

export default DocsShow;