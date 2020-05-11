import React, { Component } from "react";
import Typical from 'react-typical';
import Fade from 'react-reveal/Fade';

class Code extends Component {
  render() {
    return (
      <div>
      <div>
      <Fade big>
        <p className="tc">
          <span className="notneon">I have worked with a few technologies.</span>
        </p>
      </Fade>
      </div>
        <Fade big>
          <div className="br2 ba bw1 bc mv3 ph2 shadow-2 pa1 codediv">
            <p className="tl">
              <span className="mr1 neon">▹ </span>
              <span className="notneon mr2">Programming Languages :</span>
              <span>Java, Python, JavaScript, C</span>
            </p>
            <p className="tl">
              <span className="mr1 neon">▹ </span>
              <span className="notneon mr2">Web Technologies :</span>
              <span>HTML & CSS, React, Node.js, Express.js</span>
            </p>
            <p className="tl">
              <span className="mr1 neon">▹ </span>
              <span className="notneon mr2">Python Scientific Libraries :</span>
              <span>Numpy, Pandas, Matplotlib, Seaborn, Plotly, Scikit Learn, Tensorflow & Keras, Pytorch & Fast.ai</span>
            </p>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Code;
