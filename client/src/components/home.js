import React, { Component } from "react";
import "./home.css";
import Tagline from "./tagline";
import Navbar from "./navbar";
import Tilt from 'react-parallax-tilt';

const l = "http://localhost:3000/";

class Home extends Component {

  render() {
    return (
      <div className="tc">
          <a href={l}>
            <Tilt>
              <img src="./images/profile.png" alt="avatar" className="ba neon bw3"/>
            </Tilt>
          </a>
        <Tagline className="t"/>
        <Navbar />
    </div>
    );
  }
}

export default Home;
