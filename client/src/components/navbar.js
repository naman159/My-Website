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
        <div class="outline w-10 pa3 mr1 white">
          <a href="https://github.com/naman159">
            <code>GitHub</code>
          </a>
        </div>
        <div class="outline w-10 pa3 mr1 white">
          <a href="https://www.linkedin.com/in/nranawat/">
            <code>LinkedIn</code>
          </a>
        </div>
        <div class="outline w-10 pa3 mr1">
          <a href="https://myanimelist.net/animelist/Kyoharato">
            <code>Anime</code>
          </a>
        </div>
        <div class="outline w-10 pa3 mr1">
          <a href="https://www.anime-planet.com/users/kyoharato/manga">
            <code>Manga</code>
          </a>
        </div>
        <div class="outline w-10 pa3 mr1">
          <a>
            <code>Code</code>
          </a>
        </div><div class="outline w-10 pa3 mr1">
          <a>
            <code>Notes</code>
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
