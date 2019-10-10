import React from 'react';
import DocsIndexForm from '../docs_index_form/docs_index_form';


class DocsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoUploads : {},
      photoFile: null
    }
    this.fetchPhotoUploads = this.fetchPhotoUploads.bind(this);
  }


  fetchPhotoUploads() {
    //why no method?
    debugger
    $.ajax({
      method: "GET",
      url: `/api/projects/${this.props.projectId}/photo_uploads`
    }).then(photoUploads => {
      this.setState({photoUploads})
    })
  }

  componentDidMount() {
    debugger
    this.fetchPhotoUploads();
  }

  render() {
    // if (this.props.photo_uploads === undefined) {
    //   return null;
    // }
    debugger
    return (
      <div>
      I'm Here
      <DocsIndexForm projectId={this.props.projectId}/>
      </div>
    )
  }
}

export default DocsIndex;