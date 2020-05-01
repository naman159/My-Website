import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="flex flex-wrap justify-center white">
        <Router>
          <a href="https://github.com/naman159">
            <div className="ba b--red w-15 pa3 mr1 white grow dim link hover-yellow">
              <code>GitHub</code>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/nranawat/">
            <div className="ba b--red w-15 pa3 mr1 white grow dim link hover-blue">
              <code>LinkedIn</code>
            </div>
          </a>
          <Link to="/code">
            <div className="ba b--red w-15 pa3 mr1 white grow dim link hover-green">
              <code>Code</code>
            </div>
          </Link>
          <Link to="/otaku">
            <div className="ba b--red w-15 pa3 mr1 white grow dim link hover-dark-blue">
              <code>Anime/Manga</code>
            </div>
          </Link>
          <Link to='/notes'>
            <div className="ba b--red w-15 pa3 mr1 white grow dim link hover-pink">
              <code>Notes</code>
            </div>
          </Link>
          <Link to='/contact'>
            <div className="ba b--red w-15 pa3 mr1 white grow dim">
              <code>Contact</code>
            </div>
          </Link>
        </Router>
      </div>
    );
  }
}

export default Navbar;
