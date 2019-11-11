import React from 'react';
import DocsIndexForm from '../docs_index_form/docs_index_form';
import NavBar from '../nav_bar/nav_bar';
import DocsIndexItem from './docs_index_item';
import { Redirect } from 'react-router-dom';

class DocsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleNewDocButton = this.handleNewDocButton.bind(this);
    this.forceParentRender = this.forceParentRender.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
    this.state = {redirect: false};
  }

  handleRedirect() {
    this.setState({redirect: true});
  }



  handleNewDocButton() {
    document.getElementById("docs-index-form").classList.remove("hide-boi")
  }

  forceParentRender() {
    this.forceUpdate();
  }



  // handleRedirect() {
  //   this.props.history.push(`/projects/${this.props.projectId}`)
  // }

  componentDidMount() {
    this.props.fetchPhotoUploads(this.props.projectId);
  }

  render() {
    if (!this.props.photoUploads) {
      return null;
    }
    if (this.state.redirect) {
      return <Redirect to={`/projects/${this.props.projectId}`}/>
    }
    const photoUploads = Object.values(this.props.photoUploads);
    return (
      <div id="big-todo-list-index-container">

        <NavBar history={this.props.history} currentUser={this.props.currentUser} logout={this.props.logout} />
        <nav id="project-title-todo-list-index">

          <div id="for-project-title-todo-list-container" onClick={this.handleRedirect}>
            <img src={window.update_project_icon} />
            <div>{this.props.projectTitle}</div>
          </div>
        </nav>

       

        <div id="doc-index-div">
          <div onClick={this.handleNewDocButton} id="new-doc-button">
            <img src={window.new_doc_button} />
          </div>
          <h2 id="doc-h2">
            Docs
            &amp;
            Files
          </h2>

          <div id="docs-index-form" className="hide-boi">
            <DocsIndexForm parentRender={this.forceParentRender} createPhotoUpload={this.props.createPhotoUpload} projectId={this.props.projectId}/>
          </div>
          <div id="documents-ul">
            {photoUploads.map((photoUpload) => {
              return (
                <DocsIndexItem history={this.props.history} key={photoUpload.id} projectId={this.props.projectId} photoUpload={photoUpload} fetchPhotoUpload={() => this.props.fetchPhotoUpload(photoUpload.id)} />
              )
            })}
          </div> 
          

        </div>        
      </div>
      
    )
  }
}


export default DocsIndex;






 

/* </div>
 <DocsIndexForm projectId={this.props.projectId}/>


<ul>
        {photoUploads.map((photoUpload) => {
          return (
            <li key={photoUpload.id}>
              <h2>{photoUpload.project_id}</h2>
              <h2>{photoUpload.title}</h2>
              <img src={photoUpload.photoUrl} />
            </li>
          )
        })}
</ul> */

