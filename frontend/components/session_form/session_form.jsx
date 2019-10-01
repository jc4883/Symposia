import React from 'react';
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  render() {
    return (
      <div className="login-form-container">
        <h2>{this.props.formType}</h2>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <input type="text" value={this.state.username} onChange={this.update("username")}/>
          <input type="text" value={this.state.password} onChange={this.update("password")}/>
          <input type="submit" value="submit"/>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login"> Log In</Link>
        </form>
      </div>
    )
  }

}

export default SessionForm;