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

      <div className="center imgWidth name1">
        <Fade big>
          <Tilt>
              <a href={l}>
                <img src="./images/profile.png" alt="avatar" className="ba neon bw3"/>
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

            <div className="tag rainbow flex flex-wrap justify-center">
              <Fade top>
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
                      2000,
                      'Yes!',
                      2000,
                      '¡Si!',   //Spanish
                      2000,
                      'Oui!',   //French
                      2000,
                      'हाँ!',     //Hindi
                      2000,
                      '是!',     //Chinese
                      2000,
                      'はい！',   //Japanese
                      2000,
                      'نعم!',    //Turkish
                      2000,
                      'Да!',     //Russian
                      2000,
                      'Sim!',
                      2000,
                      'હા!',
                      2000,
                      'ਹਾਂ!',
                      2000,
                      'جی ہاں!',
                      2000,
                      'होय!',
                      2000,
                      'അതെ!',
                      2000,
                      'Sì!',
                      2000,
                      'Đúng!',
                      2000,
                      'Oo!',
                      2000,
                      'Ja!',
                      2000,
                      '예!',
                      2000,
                      'Ita!',
                      2000,
                      'Ναί!',
                      2000,
                      'Evet!',
                      2000,
                      'כן!',
                      2000,
                      'Tak!',
                      2000,
                      'ஆம்!',
                      2000,
                      'Iya!',
                      2000
                      ]}
                    loop={Infinity}
                    wrapper="b"
                  />
                  </p>
                </div>
              </Fade>
            </div>



          <Navbar anime={this.props.anime}/>

        </div>
    );
  }
}

export default Head;
