import React from 'react';

class TodoListEdit extends React.Component {


  render() {
    return (
      <div id="update-form-centering">
        <form id="update-form" onSubmit={this.handleForm} className="hide-boi">
          <div id="update-form-title-container"><div>Title</div><input id="the-title-input" onChange={this.handleTitleChange} value={this.state.title} /></div>
          <div id="update-form-description-container"><div>Notes</div><input id="the-description-input" onChange={this.handleDescriptionChange} value={this.state.note} /></div>

          <div id="update-form-flex-row">
            <input type="image" src={window.save_changes} />
            <div onClick={this.handleDiscard}>
              <img src={window.discard_changes} />
            </div>
          </div>
        </form>
      </div>
    )
  }
}