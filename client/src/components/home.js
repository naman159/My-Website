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
        <div className="name">
        <h1 className="white lh-title f1">Naman Ranawat</h1>
          <div className="name2">
          <div className="flex justify-center white">
              <h3 className="mr1">Sleep .</h3>
              <h3 className="mr1">Code .</h3>
              <h3 className="mr1">Watch .</h3>
              <h3 className="mr1">Read .</h3>
              <h3>Sleep</h3>
          </div>
          </div>
        </div>
        <Navbar className="name" />
      </div>

    );
  }
}

export default Home;
