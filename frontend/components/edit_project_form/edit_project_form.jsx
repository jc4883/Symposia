


import React from 'react';
import ProjectForm from './project_form';

class EditProjectForm extends React.Component {

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.projectId != this.props.match.params.projectId) {
      this.props.fetchProject(this.props.match.params.projectId);
    }
  }


  render() {
    if (!this.props.project) {
      return null;
    }
    const { logout, projectId, updateProject, project, currentUser } = this.props;
    return (
      <ProjectForm
        currentUser={currentUser}
        projectId={projectId}
        updateProject={updateProject}
        logout={logout}
        project={project} />
    );
  }
}

export default EditProjectForm;


/*



 <div id="edit-project-container">
          
          
          
        </div>

*/