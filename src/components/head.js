import React, { Component } from "react";
import "./home.css";
import Typical from 'react-typical';
import Tilt from 'react-tilt';
import Fade from 'react-reveal/Fade';
import Navbar from "./navbar";

const l = "http://localhost:3000/";

class Head extends Component {
  render() {
    return (
      <div className="tc flex flex-column justify-center">
      <Fade big>
        <Tilt>
          <div className="rainbow">
            <a href={l}>
              <img src="./images/profile.png" alt="avatar" className="ba neon bw3"/>
            </a>
          </div>
        </Tilt>
      </Fade>
      <div className="name">
      <Fade bottom>
        <div className="mt4">
          <h1 className="myname rainbow">Naman Ranawat</h1>
        </div>

              <div className="tag rainbow flex flex-wrap justify-center name2">
                <div className="mr1">
                  <p>Sleep ・</p>
                </div>
                <div className="mr1">
                  <p className="mr1">Code ・</p>
                </div>
                <div className="mr1">
                  <p className="mr1">Watch ・</p>
                </div>
                <div className="mr1">
                  <p className="mr1">Read ・</p>
                </div>
                <div className="mr1">
                  <p className="mr1">Repeat ?</p>
                </div>
                <div className="mr1 grow">
                  <p>
                  <Typical
                    steps={[
                      '',   //English
                      1500,
                      'Yes!',
                      1500,
                      '¡Si!',   //Spanish
                      1500,
                      'Oui!',   //French
                      1500,
                      'हाँ!',     //Hindi
                      1500,
                      '是!',     //Chinese
                      1500,
                      'はい！',   //Japanese
                      1500,
                      'نعم!',    //Turkish
                      1500,
                      'Да!',     //Russian
                      1500,
                      'Sim!',
                      1500,
                      'હા!',
                      1500,
                      'ਹਾਂ!',
                      1500,
                      'جی ہاں!',
                      1500,
                      'होय!',
                      1500,
                      'അതെ!',
                      1500,
                      'Sì!',
                      1500,
                      'Đúng!',
                      1500,
                      'Oo!',
                      1500,
                      'Ja!',
                      1500,
                      '예!',
                      1500,
                      'Ita!',
                      1500,
                      'Ναί!',
                      1500,
                      'Evet!',
                      1500,
                      'כן!',
                      1500,
                      'Tak!',
                      1500,
                      'ஆம்!',
                      1500,
                      'Iya!',
                      1500
                      ]}
                    loop={Infinity}
                    wrapper="b"
                  />
                  </p>
                </div>
          </div>
          <Navbar anime={this.props.anime}/>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Head;
