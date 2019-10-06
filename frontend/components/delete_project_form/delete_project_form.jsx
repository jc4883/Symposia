


import React from 'react';
import DeleteForm from './delete_form';

class DeleteProjectForm extends React.Component {

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
    const { logout, projectId, deleteProject, project, currentUser } = this.props;
    return (
      <DeleteForm
        currentUser={currentUser}
        projectId={projectId}
        deleteProject={deleteProject}
        logout={logout}
        project={project} />
    );
  }
}

export default DeleteProjectForm;


/*



 <div id="edit-project-container">
          
          
          
        </div>

*/