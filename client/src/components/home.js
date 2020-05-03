import React, { Component } from "react";
import "./home.css";
import Tagline from "./tagline";
import Navbar from "./navbar";
import Tilt from 'react-parallax-tilt';

const l = "http://localhost:3000/";

class Home extends Component {

  render() {
    return (
      <div>
      <div className="tc">
      <Tilt
        className="tilt-img"
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={900}
        scale={1.1}
        transitionSpeed={2000}
        gyroscope={true}>
          <a href={l}>
            <img src="./images/profile.png" alt="avatar" className="ba neon bw3"/>
          </a>
        </Tilt>
        <Tagline className="t"/>
        </div>
      <Navbar />
      </div>
    );
  }
}

export default Home;
