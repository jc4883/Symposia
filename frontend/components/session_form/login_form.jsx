import React from 'react';
import { Link } from 'react-router-dom'
import { login } from '../../util/session_api_util';
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
    this.demoLogin = this.demoLogin.bind(this);
    //this.typeWriter = this.typeWriter.bind(this);
    this.getIncorrectPasswordError = this.getIncorrectPasswordError.bind(this);
    this.messagesExceptIncorrectPassword = this.messagesExceptIncorrectPassword.bind(this);
    this.shortenClass = this.shortenClass.bind(this);
    this.passErrorExists = this.passErrorExists.bind(this);
    this.messagesExceptIncorrectPassword = this.messagesExceptIncorrectPassword.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm({username: this.state.username, password: this.state.password});
  }

  update(field) {
    return (e) => {
      if (this.props.errors.includes("We couldn't find that one. Want to try another?")) {
        this.props.clearErrors();
      }
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

  shortenClass() {
    if (this.state.phase === "validated"){
      return "shorten-form";
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

  // typeWriter(letter) {
  //   let i = 0;
  //   let j = 0;
  //   let username = 'demologger'; /* The text */
  //   let password = "abbieR0ad";


   
  //     // while (i < username.length) {
  //     //   document.getElementById("username-input").innerHTML += username.charAt(i);
  //     //   i++;
  //     //   setTimeout(() => {}, speed);
  //     // }
  //     if (word.length ) {
  //       document.getElementById("username-input").value += letter;
  //       setTimeout(()=> this.typeWriter(letter), 1000);
  //     }
  //   //this.props.processForm({ user: "demologger", password: "abbieR0ad" })

  // }
  componentWillUnmount() {
    this.props.clearErrors();
  }

  componentDidUpdate(prevProps) {

    document.getElementById("password-input").focus();
  }

  validateUsername(e) {
    e.preventDefault();
    this.props.validateUsername(this.state.username).then(
      () => { 
        return this.setState({phase: "validated"}) 
      })
  }

  demoLogin(e) {
    // document.getElementById("username-input").value = "user1";
    // setTimeout(() => {
    //   console.log("here");
    //   document.getElementById("next-button-to-click").click();
    // }, 1000);
    e.preventDefault();
    this.props.processForm({username: "demologger", password: "abbieR0ad"})
  }

  getIncorrectPasswordError() {
    let incorrectPassMsg = "We didn\'t recognize that password."
    if (this.props.errors[0] === incorrectPassMsg) {
      return(
        <div>{incorrectPassMsg}</div> 
      ) 
    }
  }

  messagesExceptIncorrectPassword() {
    return this.props.errors.filter((err) => {
      return err !== "We didn\'t recognize that password."
    })
  }

  passErrorExists() {
    if (this.props.errors.includes("We didn\'t recognize that password.")) {
      return "error-e-class";
    } else {
      return "error-dne-class";
    }
  }

  render() {
    return (
      <div className="login-wrapper">
        <img src={window.symposia_logo} id="login-symposia-logo" />

      <div className="login-form-container" >
        <h2>Log in to Symposia</h2>
        <form className="demo-login-form" onSubmit={this.demoLogin}>
          <button className="demo-login-button">Demo Login</button>  
        </form>  
        <div id="use-my-own-account">
          <div className="first-line"></div>
            <div className="use-my-own-account-text">Or, use my own account </div>    
          <div className="line"></div>
        </div>  

        <ul id="incorrect-password" className={this.passErrorExists()}>
          <div id="incorrect-password-inner-div">
              {this.getIncorrectPasswordError()}
              
          </div>
          
        </ul>

        <form id="login-form" onSubmit={this.chooseAction()} className="login-form-box">
          <div id="login-username">Username</div>
          <input autoComplete="off" autoFocus="autofocus" placeholder="e.g. julie24" id="username-input" type="text" value={this.state.username} onChange={this.update("username")}/>
          <div id="login-errors" >{this.messagesExceptIncorrectPassword()}</div>
            <div id="login-password" className={this.passClass()}>Password</div>
          <input autoFocus="autofocus" type="text"  id="password-input" className={this.passClass()} type="password" value={this.state.password} onChange={this.update("password")}/>
          <button id="next-button-to-click" className={`next-button ${this.notPassClass()}`}>Next</button>
            <button className={`log-in-button ${this.passClass()}`}>Log in</button>
        </form>  
          
          
        
      </div>
      <div className="dont-have-account">
        Don't have an account?
        <Link className="sign-up-instead" to="/signup"> Sign up instead</Link>
      </div>
        
      </div>
    )
  }

}

export default LoginForm;