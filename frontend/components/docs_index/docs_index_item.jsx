import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class DocsIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.photoUpload = this.props.photoUpload;
    this.handleShow = this.handleShow.bind(this);
    //we get this.props.photoUpload from DocsIndex
  }

  handleShow() {
    this.props.fetchPhotoUpload().then(() => {
      
      this.props.history.push(`/projects/${this.props.projectId}/docs/${this.photoUpload.id}`);
    })
  }
  

  render() {


    return (
      <div id="doc-item" onClick={this.handleShow}>
        <img id="doc-item-image" src={this.photoUpload.photoUrl} />
        <h2 id="doc-item-title">{this.photoUpload.title}</h2>
        <div id="border-boi"></div>
        <h4 id="doc-item-description">{this.photoUpload.description}</h4>
      </div>

    )
  }
}

export default DocsIndexItem;

