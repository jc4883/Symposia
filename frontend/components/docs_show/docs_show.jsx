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
    this.goToProject = this.goToProject.bind(this);
    this.goToDocsAndFiles = this.goToDocsAndFiles.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.deletePhotoUpload(this.props.photoUploadId).then(() => {
      this.goToDocsAndFiles();
      
      
    });
    
  }

  goToProject() {
    this.props.history.push(`/projects/${this.props.projectId}`);
  }

  goToDocsAndFiles() {
    this.props.history.push(`/projects/${this.props.projectId}/docs`);
  }

  componentDidMount() {
    this.props.fetchPhotoUpload(this.props.photoUploadId);
  }
  

  render() {
    if (!this.props.photoUpload) {
      return null;
    }
    const photoUpload = this.props.photoUpload[this.props.photoUploadId];  
    let downloadLink = "";
    if (photoUpload) {
      downloadLink = photoUpload.railsBlobUrl;
    }
    let dateStr = photoUpload.created_at;
    dateStr = dateStr.slice(0, -1);
    let date = new Date(dateStr);
    let day = date.getDate();
    let month = this.monthNames[date.getMonth()];
    let year = date.getFullYear();
    const createdAt = `${month} ${day}, ${year}`;

    let source = "";
    if (photoUpload.is_image) {
      source = photoUpload.photoUrl;
    }

    return (
      <div id="big-todo-list-index-container">

              <NavBar history={this.props.history} currentUser={this.props.currentUser} logout={this.props.logout} />
              <nav id="project-title-todo-list-index">

                <div id="for-todo-list-show-project-title-container">
                  <img src={window.update_project_icon} />
                  <div>
                    <h3 onClick={this.goToProject} id="first-h3-project">{this.props.projectTitle}</h3>
                    <div className="no-style">></div> 
                    <h3 onClick={this.goToDocsAndFiles} id="second-h3-todo">Docs &amp; Files</h3>
                  </div>
                </div>
              </nav>

              <div id="doc-index-div" className="display-flex-doc-show"> 
                <div className="doc-show-buttons">
                  <a href={downloadLink}>Download</a>
                  <button onClick={this.handleDelete}>Delete</button>
                </div>
                <div id="doc-show-div">
                  <img id="doc-show-image" src={source} />
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