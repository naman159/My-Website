import React, { Component } from "react";
import "./home.css"
import "tachyons"
import Navbar from "./navbar"

class Home extends Component {
  render() {
    return (
      <div className="tc">
        <div className="grow">
          <img src="./images/profile.png" />
        </div>
        <h1 className="white lh-title f1">Naman Ranawat</h1>
        <Navbar className="name" />
      </div>

    );
  }
}

/*<div className = "name">
  <h1 className="white lh-title f1">Naman Ranawat</h1>
  <div className="flex">
    <div className="white center">
      <h3>Sleep</h3>
      <h3> | Code</h3>
      <h3> | Anime</h3>
      <h3> | Manga</h3>
      <h3> | Sleep</h3>
    </div>
  </div>
</div>*/

export default Home;
