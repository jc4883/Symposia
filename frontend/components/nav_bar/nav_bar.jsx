import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleDropDown = this.handleDropDown.bind(this);
  }

  handleDropDown() {
    document.getElementById("avatar-dropdown").classList.toggle("show");
    //document.getElementById("triangle-boy").classList.toggle("show-triangle-boy")
  }

  render() {
    return (
      <div id="nav">
        <li id="nav-bar-logo-div">
          <img id="nav-bar-symposia-logo" src={window.transparent_symposia_logo} />
          <div id="nav-bar-symposia">Symposia</div>
        </li>

        <li id="nav-icons">
          <ul>
            <li id="home-li">
              <img src={window.home_icon} />
              <Link to="/projects" id="nav-bar-home">
                Home
              </Link>
            </li>
            <li id="ping-li">
              <img src={window.ping_icon} />
              <div id="nav-bar-pings">
                Pings
              </div>
            </li>
          </ul>
        </li>

        <li>
          <div id="profile-avatar">
              <button onClick={this.handleDropDown} id="profile-picture" className="circle">{this.props.currentUser.username.charAt(0).toUpperCase()}</button>
              
              <div id="avatar-dropdown" className="dropdown-content">

                <ul id="message-from-socrates">
                  <li>Socratic Corner</li>
                  <li className="profile-avatar-line"></li>
                </ul>
                <p>
                  You're all set to be awe-struck by the Lord.
                  May you recognize God's penmanship signed in the language of love.
                </p>
                <ul id="personal-settings">
                  <li>Personal Settings</li>
                  <li className="profile-avatar-line"></li>
                </ul>
                <button className="log-out-button" onClick={this.props.logout}>Log Out</button>
                <div id="feynman-container">
                  <img id="feynman-gif" src={window.feynman}/>
                </div>
              </div>
          </div>
        </li>
      </div>
    )
  }
}

//

export default NavBar;


/*
top: 0;
right: 0;
left: 0;
position: fixed,
background-size: auto 100%;
*/