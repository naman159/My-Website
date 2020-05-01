import React, { Component } from "react";
import "./home.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import Navbar from "./navbar";
import Tagline from "./tagline";
import Code from "./navs/code";
import Notes from "./navs/notes";
import Otaku from "./navs/otaku";
import Contact from "./navs/contact";

class Home extends Component {

  render() {
    return (
      <div className="tc">
          <div className="grow ba">
            <img src="./images/profile.png" alt="avatar"/>
          </div>
          <Tagline />

          <Router>
            <div className="flex flex-wrap justify-center white">
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
            </div>
            
            <div className="center">
              <Switch>
                <Route exact path="/code" component={Code} />
                <Route exact path="/notes" component={Notes} />
                <Route exact path="/otaku" component={Otaku} />
                <Route exact path="/contact" component={Contact} />
              </Switch>
            </div>
          </Router>

    </div>
    );
  }
}

export default Home;
