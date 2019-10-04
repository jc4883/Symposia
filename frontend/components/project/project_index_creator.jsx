import React from 'react';
import { Link } from 'react-router-dom'

class ProjectIndexCreator extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="index-creator-comp" className="index-item-container">
        <Link to="/projects/new">
          <img src={window.transparent_new_project_button}/>
        </Link>
      </div>
    )
  }


}

export default ProjectIndexCreator;