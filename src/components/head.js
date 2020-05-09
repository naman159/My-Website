import React, { Component } from "react";
import "./home.css";
import Typical from 'react-typical';
import Tilt from 'react-tilt';
import Fade from 'react-reveal/Fade';
import Navbar from "./navbar";

const l = "http://namanranawat.netlify.app/";

/*<span className="mr1">
  <Typical
    steps={[
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
</span>*/

class Head extends Component {
  render() {
    return (
      <div className="tc flex flex-column justify-center">

      <div className="center imgWidth name1">
        <Fade big>
          <Tilt>
              <a href={l}>
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
      <div className="pb2 mb2 rainbow">
        <span className="mr1">Sleep ・</span>
        <span className="mr1"> Code ・</span>
        <span className="mr1">Watch ・</span>
        <span className="mr1">Read ・</span>
        <span className="mr1">Repeat</span>
      </div>
      </Fade>

      <Navbar anime={this.props.anime} manga={this.props.manga}/>

      </div>
    );
  }
}

export default Head;
