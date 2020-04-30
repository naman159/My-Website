import React, { Component } from "react";
import "./home.css"
import "tachyons"

class Home extends Component {
  render() {
    return (
      <div className="tc">
        <div className="grow">
          <img src="./images/profile.png" />
        </div>

        <div className = "name">
          <h1 className="white lh-title f1">Naman Ranawat</h1>

          <h3 className="white">Sleep/Code/Anime/Manga/Sleep</h3>
        </div>
      </div>

    );
  }
}

export default Home;
