import React from 'react';


class DocsIndexForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      photoFile: null,
      photoUrl: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  
  handleTitle(e) {
    this.setState({title: e.currentTarget.value})
  }

  handleDescription(e) {
    this.setState({description: e.currentTarget.value})
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    const cutPng = file.name.slice(0, -4); 
    //get photo url even before photo is uploaded
    fileReader.onloadend = () => {
      this.setState({photoFile: file, photoUrl: fileReader.result, title: cutPng});
    }
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleCancel() {
    document.getElementById("docs-index-form").classList.add("hide-boi")
  }

  handleSubmit(e) {
    e.preventDefault();
    this.handleCancel();
    let formData = new FormData();
    formData.append('photo_upload[title]', this.state.title);
    formData.append('photo_upload[description]', this.state.description);
    formData.append('photo_upload[project_id]', this.props.projectId);
    
    if (this.state.photoFile) {
      formData.append('photo_upload[photo]', this.state.photoFile);
    }
    this.props.createPhotoUpload(this.props.projectId, formData).then(this.props.parentRender);
  }


  render() {
    const preview = this.state.photoUrl ? <img id="constraint-attached" src={this.state.photoUrl}/> : null;
    return ( 
      <div>
        
        <form id="docs-index-form-html" onSubmit={this.handleSubmit}> 
          <div id="form-excluding-submit-button">

            <div id="form-excluding-submit-button-column">
              <input id="file-input-docs" onChange={this.handleFile} type="file"/> 
              {preview}
            </div>

            <div id="docs-index-form-inputs">
              <div id="docs-index-form-title-container">
                <input id="docs-index-form-title" type="text" onChange={this.handleTitle} value={this.state.title} />
                <h2>.png</h2>
              </div>
              <div id="doc-notes-div">
                <h2>Notes</h2>
                <input placeholder="Add any notes here..." id="docs-index-form-description" type="text" onChange={this.handleDescription} value={this.state.description} />
              </div>
            </div>

          </div>

    
          <div id="docs-index-form-buttons">
            <input id="docs-index-form-post-button" type="image" src={window.post_to_the_project}/>
            <div onClick={this.handleCancel}>
              <img src={window.discard_changes}/>
            </div>
          </div>
            
        </form>
      </div>
    )
  }

}

export default DocsIndexForm;


