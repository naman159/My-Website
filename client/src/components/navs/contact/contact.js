import React, { Component } from "react";
import "../../home.css";

class Contact extends Component {
  render() {
    return (
      <div className="flex flex-wrap justify-center tl mt2">
        <div className="shadow br2 ba bw1 b--white mv3 tl ph2">
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
            <a href="https://www.instagram.com/trademarkedsetups/" target="_blank"  className="dim">
              <span className="notneon">@trademarkedsetups</span>
            </a>
          </p>
          <p>
            <span className="mr1 neon">▹ </span>
            <span className="notneon mr1">Twitter :</span>
            <a href="https://twitter.com/naman1591" target="_blank"  className="dim">
              <span className="notneon">@naman1591</span>
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;
