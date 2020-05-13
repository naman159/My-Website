import React, { Component } from "react";
import "./home.css";
import Tilt from 'react-tilt';
import Fade from 'react-reveal/Fade';
import Navbar from "./navbar";

class Head extends Component {
  render() {
    return (
      <div className="tc flex flex-column justify-center">

      <div className="center imgWidth name1">
        <Fade big>
          <Tilt>
              <a href={"/"}>
                <img src="./images/profile.png" alt="avatar" className="ba bw3 rainbow2 shadow-3"/>
              </a>
          </Tilt>
        </Fade>
      </div>

      <div className="name">
      <Fade bottom>
        <div className="mt4">
          <h1 className="myname rainbow">Naman Ranawat</h1>
        </div>
      </Fade>
      </div>

      <Fade top>
        <div className="pb2 mb2 tbox center">
          <div className="rainbow">
            <span className="mr1">Sleep ・</span>
            <span className="mr1">Code ・</span>
            <span className="mr1">Watch ・</span>
            <span className="mr1">Read ・</span>
            <span className="mr1">Repeat</span>
          </div>
        </div>
      </Fade>

      <Navbar anime={this.props.anime} manga={this.props.manga}/>

      </div>
    );
  }
}

export default Head;
