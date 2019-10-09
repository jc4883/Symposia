import React from 'react';
import NavBar from '../nav_bar/nav_bar_container';
import ProjectIndexItem from './project_index_item';
import ProjectIndexCreator from './project_index_creator';

class ProjectIndex extends React.Component {

  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    this.props.fetchProjects();
  }

  handleLogout(){
    this.props.logout();
  }

  render() {
    let projects = Object.values(this.props.projects);  
    //we're not retrieve the created_at.
    //let sortedProjects = projects.sort((a, b) => b.created_at - a.created_at)
    return (
      <div id="project-index">
        <NavBar currentUser={this.props.currentUser} logout={this.props.logout}/>
        <div id="your-projects">Your Projects</div>
        <ul id="project-index-items">

          {projects.slice(0).reverse().map((project, key) => {
            return <ProjectIndexItem key={key} project={project} /> 

          })}
          <ProjectIndexCreator />
        </ul>
      </div>
    )
  }
}

export default ProjectIndex;



