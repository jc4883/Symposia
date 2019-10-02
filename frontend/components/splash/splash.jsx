import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';


const Splash = () => {
  return (
    <nav>
      <header>
        <nav className="top-nav">
            <div className="logo">
              <img src={window.symposia_logo} id="symposia-logo"/>
              <h1>Symposia</h1>
            </div>
          <GreetingContainer />
        </nav>
      </header>
      <div className="root-page-text" >
        <h1>
          Get it together and manage 
          <br/> 
          projects the right way.
        </h1>

        <p>
          <strong>Before Basecamp:</strong> Projects feel scattered, things
          slip, it’s tough to see where things <br />stand, and people are stressed. <strong>After Basecamp:</strong> Everything’s organized in one place, <br/>
          you’re on top of things, progress is clear, and a sense of calm sets in.
        </p>
        <Link to="/signup" class="give-basecamp-a-try">
          Give Basecamp a Try
        </Link>
      </div>

      <img src={window.root_page_image} id="root-page-image" />
    </nav>
  )
} 


export default Splash;
