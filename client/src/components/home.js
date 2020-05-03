import React, { Component } from "react";
import "./home.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Tagline from "./tagline";
import Code from "./navs/code";
import Notes from "./navs/notes";
import Otaku from "./navs/otaku";
import Contact from "./navs/contact";
import Tilt from 'react-parallax-tilt';

const l = "http://localhost:3000/";

class Home extends Component {

  render() {
    return (
      <div className="tc">
        <Tilt>
          <a href={l}>
              <img src="./images/profile.png" alt="avatar" className="ba neon bw2"/>
          </a>
        </Tilt>
        <Tagline className="t"/>

          <Router>
            <div className="flex flex-wrap justify-center">
              <a href="https://github.com/naman159">
                <div className="ba w-15 pa3 mr1 grow dim link hover neon">
                  <code>GitHub</code>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/nranawat/">
                <div className="ba w-15 pa3 mr1 grow dim link hover neon">
                  <code>LinkedIn</code>
                </div>
              </a>
              <Link to="/code">
                <div className="ba w-15 pa3 mr1 grow dim link hover neon">
                  <code>Code</code>
                </div>
              </Link>
              <Link to="/otaku">
                <div className="ba w-15 pa3 mr1 grow dim link hover neon">
                  <code>Anime/Manga</code>
                </div>
              </Link>
              <Link to='/notes'>
                <div className="ba w-15 pa3 mr1 grow dim link hover neon">
                  <code>Notes</code>
                </div>
              </Link>
              <Link to='/contact'>
                <div className="ba w-15 pa3 mr1 grow dim link hover neon">
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
