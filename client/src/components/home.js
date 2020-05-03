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
          <a href={l}>
          <Tilt
            className="tilt-img"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={900}
            scale={1.1}
            transitionSpeed={2000}
            gyroscope={true}
          >
              <img src="./images/profile.png" alt="avatar" className="ba neon bw3"/>
            </Tilt>
          </a>
        <Tagline className="t"/>
        </div>
      <Navbar />
      </div>
    );
  }
}

export default Home;
