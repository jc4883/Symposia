import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';


class Splash extends React.Component {

  componentDidMount() {
    document.getElementById("html").classList.add("white-background");
  }

  componentWillUnmount() {
    document.getElementById("html").classList.remove("white-background");
  }

  render() {
    return (
      <nav>
        <header>
          <nav className="top-nav">
            <div className="logo">
              <img src={window.symposia_logo} id="symposia-logo" />
              <h1>Symposia</h1>
            </div>
            <GreetingContainer />
          </nav>
        </header>
        <div className="root-page-text" >
          <h1>
            Get it together and manage
          <br />
            projects the right way.
        </h1>

          <p>
            <strong>Before Symposia:</strong> Projects feel scattered, things
          slip, it’s tough to see where things <br />stand, and people are stressed. <strong>After Symposia:</strong> Everything’s organized in one place, <br />
            you’re on top of things, progress is clear, and a sense of calm sets in.
        </p>
          <Link to="/signup" className="give-basecamp-a-try">
            Give Symposia a Try
        </Link>
        </div>

        <img src={window.root_page_image} id="root-page-image" />
      </nav>
    )
  }
}


export default Splash;
