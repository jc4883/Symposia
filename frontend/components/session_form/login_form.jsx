import React from 'react';
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      phase: "not validated",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.passClass = this.passClass.bind(this);
    this.validateUsername = this.validateUsername.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm({username: this.state.username, password: this.state.password});
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  passClass() {
    if (this.state.phase === "not validated") {
      return "hide-pass";
    } else {
      return "show-pass";
    }
  } 

  notPassClass() {
    if (this.state.phase === "not validated") {
      return "show-pass";
    } else {
      return "hide-pass";
    }
  }

  chooseAction() {
    if (this.state.phase === "not validated") {
      return  this.validateUsername;
    } else {
      return this.handleSubmit;
    }
  }

  validateUsername(e) {
    e.preventDefault();
    this.props.validateUsername(this.state.username).then(
      () => this.setState({phase: "validated"}))
  }

  render() {
    return (
      <div className="login-wrapper">
        <img src={window.symposia_logo} id="login-symposia-logo" />

      <div className="login-form-container" >
        <h2>Log in to Symposia</h2>
        <form onSubmit={this.chooseAction()} className="login-form-box">
          <div id="login-username">Username</div>
          <input type="text" value={this.state.username} onChange={this.update("username")} />
          <div>{this.props.errors}</div>
          <div id="login-password" className={this.passClass()}>Password</div>
          <input className={this.passClass()} type="text" value={this.state.password} onChange={this.update("password")} />
          <button className="next-button">Next</button>
          <button className={this.passClass()}>Log in</button>
        </form>  
          
          
        
      </div>
        <Link className="sign-up-instead" to="/signup">Sign up instead.</Link>
      </div>
    )
  }

}

export default LoginForm;