import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./home.css"
import "tachyons"

class Navbar extends Component {
  render() {
    return (
      <div class="flex flex-wrap justify-center white">
        <a href="https://github.com/naman159">
          <div class="ba b--orange w-15 pa3 mr1 white grow dim">
            <code>GitHub</code>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/nranawat/">
          <div class="ba b--orange w-15 pa3 mr1 white grow dim">
            <code>LinkedIn</code>
          </div>
        </a>
        <a href="https://myanimelist.net/animelist/Kyoharato">
          <div class="ba b--orange w-15 pa3 mr1 white grow dim">
            <code>Anime</code>
          </div>
        </a>
        <a href="https://www.anime-planet.com/users/kyoharato/manga">
          <div class="ba b--orange w-15 pa3 mr1 white grow dim">
            <code>Manga</code>
          </div>
        </a>
        <a>
          <div class="ba b--orange w-15 pa3 mr1 white grow dim">
            <code>Code</code>
          </div>
        </a>
        <a>
          <div class="ba b--orange w-15 pa3 mr1 white grow dim">
            <code>Notes</code>
          </div>
        </a>
      </div>
    );
  }
}

export default Navbar;
