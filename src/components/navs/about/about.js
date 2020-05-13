import React, { Component } from "react";
import Fade from 'react-reveal/Fade';

class Code extends Component {
  render() {
    return (
      <div>
        <Fade big>
          <div className="br2 ba bw1 bc mv3 ph2 shadow-2 pa1 aboutdiv">
            <p>Yo! My name is <b>Naman</b>. I am an undergrad at <a href="https://www.umass.edu/" target="_blank" rel="noopener noreferrer" className="notneonn dim"><b>UMass Amherst</b></a>, majoring in <a href="https://www.cics.umass.edu/" target="_blank" rel="noopener noreferrer" className="notneonn dim"><b>Computer Science</b></a>.</p>
            <p>I enjoy building random stuff, ranging from web and native apps to data analaysis notebooks and deep learning models.</p>
            <p>My primary interest revolves around integrating novel machine learning techniques in general purpose software and applications.</p>
            <p>I keep most of my day to day projects open source. Feel free to check them out on <a href="https://www.anime-planet.com/users/kyoharato/manga" target="_blank" rel="noopener noreferrer" className="notneonn dim"><b>GitHub</b></a>.</p>
            <p>P.S. I watch and read a lot of anime and manga.</p>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Code;
