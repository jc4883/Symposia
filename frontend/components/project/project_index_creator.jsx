import React from 'react';
import { Link } from 'react-router-dom'

class ProjectIndexCreator extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link to="/projects/new">
      <div id="index-creator-comp" className="index-item-container">
          <img src={window.transparent_new_project_button}/>
      </div>
      </Link>
    )
  }


}

export default ProjectIndexCreator;