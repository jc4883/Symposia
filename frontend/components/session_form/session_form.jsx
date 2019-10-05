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
      if (this.props.errors.length > 0) {
        this.props.clearErrors();
      }
      this.setState({[field]: e.target.value})
    }
  }

  componentWillUnmount() {
    this.props.clearErrors();
    document.getElementById("html").classList.remove("white-background");
  }

  componentDidMount() {
    document.getElementById("html").classList.add("white-background");
  }


  render() {
    return (
      <div className="login-wrapper">
        <img src={window.symposia_logo} id="login-symposia-logo" />
        <h2>Sign up for Symposia Personal</h2>
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="signup-form-box">
            <div id="type-name-and-email">Type your name & a password to begin</div>
            <div className="test" id="login-errors" >{this.props.errors.map(err =>  <li>{err}<br/></li>)}</div>
            <input autoComplete="off" autoFocus="autofocus" id="signup-username-input" placeholder="Your name" type="text" value={this.state.username} onChange={this.update("username")} required/>
            <input autoComplete="off" id="signup-password-input" placeholder="Your password" type="password"  value={this.state.password} onChange={this.update("password")} required/>
            <button className="next-button signup-next-button">Next</button>
          </form>
        </div>
        <div className="already-have-account">
          Already have an account? 
          <Link className="log-in-link" to="/login"> Log In.</Link>
        </div>
            
      </div>
    )
  }

}


export default SessionForm;