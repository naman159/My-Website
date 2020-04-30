import React, { Component } from "react";
import "./home.css"
import "tachyons"

class Navbar extends Component {
  render() {
    return (
      <div class="flex justify-center white">
        <div class="outline w-10 pa3 mr1">
          <code>Sleep</code>
        </div>
        <div class="outline w-10 pa3 mr1">
          <code>Anime</code>
        </div>
        <div class="outline w-10 pa3 mr1">
          <code>Manga</code>
        </div>
        <div class="outline w-10 pa3 mr1">
          <code>4</code>
        </div>
        <div class="outline w-10 pa3 mr3">
          <code>5</code>
        </div>
      </div>
    );
  }
}

export default Navbar;
