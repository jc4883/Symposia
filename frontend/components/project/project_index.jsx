import React from 'react'


class ProjectIndex extends React.Component {

  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(){
    this.props.logout();
  }

  render() {
    return (
      <div>
        I am the Project Index
        <button onClick={this.handleLogout}>log out</button>
      </div>
    )
  }
}

export default ProjectIndex;