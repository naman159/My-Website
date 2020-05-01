import React, { Component } from "react";
import "./home.css"
import "tachyons"
import Navbar from "./navbar"
import Typist from 'react-typist';
import Typical from 'react-typical'

class Home extends Component {
  render() {
    return (
      <div className="tc">
        <div className="grow ba hooray">
          <img src="./images/profile.png" />
        </div>
        <div className="name">
          <h1 className="white lh-title f1">Naman Ranawat</h1>
            <div className="name2">
              <div className="flex justify-center white">
                  <p className="mr1">Sleep .</p>
                  <p className="mr1">Code .</p>
                  <p className="mr1">Watch .</p>
                  <p className="mr1">Read .</p>
                  <p className="mr1">Repeat?</p>
                  <p>
                  <Typical
                    steps={[
                      'Yes!',
                      1500,
                      '¡Si!',
                      1500,
                      'Oui!',
                      1500,
                      'हाँ!',
                      1500,
                      '是!',
                      1500,
                      'はい',
                      1500,
                      'نعم!',
                      1500,
                      'Да!',
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
                      1500
                      ]}
                    loop={Infinity}
                    wrapper="b"
                  />
                  </p>
              </div>
          </div>
        </div>
        <Navbar className="name" />
      </div>

    );
  }
}
/*
<div className="name2">
  <div className="flex justify-center white">
      <h3 className="mr1">Sleep .</h3>
      <h3 className="mr1">Code .</h3>
      <h3 className="mr1">Watch .</h3>
      <h3 className="mr1">Read .</h3>
      <h3 className="mr1">Repeat?</h3>
      <Typical
        steps={['Hello', 1500, 'Hello world!', 500]}
        loop={Infinity}
        wrapper="p"
      />
  </div>
</div>
*/
export default Home;
