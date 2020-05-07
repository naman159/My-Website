import React, { Component } from "react";
import "../../home.css";
import Fade from 'react-reveal/Fade';

class Contact extends Component {
  render() {
    return (
        <div className="flex flex-wrap justify-center pa2">
        <Fade big>
          <div className="shadow br2 ba bw1 bc mv3 ph2 shadow-2">
            <p>
              <span className="mr1 neon">▹ </span>
              <span className="notneon mr1">Email : </span>
              <a href="mailto:namanranawat159@gmail.com" className="dim">
                <span className="notneon">namanranawat159@gmail.com</span>
              </a>
            </p>
            <p>
              <span className="mr1 neon">▹ </span>
              <span className="notneon mr1">Instagram :</span>
              <a href="https://www.instagram.com/trademarkedsetups/" target="_blank" rel="noopener noreferrer" className="dim">
                <span className="notneon">@trademarkedsetups</span>
              </a>
            </p>
            <p>
              <span className="mr1 neon">▹ </span>
              <span className="notneon mr1">Twitter :</span>
              <a href="https://twitter.com/naman1591" target="_blank" rel="noopener noreferrer" className="dim">
                <span className="notneon">@naman1591</span>
              </a>
            </p>
          </div>
          </Fade>
        </div>
    );
  }
}

export default Contact;
