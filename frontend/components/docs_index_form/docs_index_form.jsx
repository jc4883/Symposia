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
    //get photo url even before photo is uploaded
    fileReader.onloadend = () => {
      this.setState({photoFile: file, photoUrl: fileReader.result});
    }
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo_upload[title]', this.state.title);
    formData.append('photo_upload[description]', this.state.description);
    formData.append('photo_upload[project_id]', this.props.projectId);
    if (this.state.photoFile) {
      formData.append('photo_upload[photo]', this.state.photoFile);
    }
    $.ajax({
      url: `/api/projects/${this.props.projectId}/photo_uploads`,
      method: "POST",
      data: formData,
      contentType: false,
      processData: false
    }).then(
      (response) => console.log(response[0])
    )

  }

  render() {
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl}/> : null;
    return ( 
      <>
      {preview}
      <form onSubmit={this.handleSubmit}> 
        <input type="text" onChange={this.handleTitle} value={this.state.title} />
        <input type="text" onChange={this.handleDescription} value={this.state.description} />
        <input onChange={this.handleFile} type="file" /> 
        <button></button>
      </form>
      </>
    )
  }

}


export default DocsIndexForm;