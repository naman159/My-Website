import React, { Component } from "react";
import "./home.css";
import Tagline from "./tagline";
import Navbar from "./navbar";
import Tilt from 'react-tilt';
const jikanjs  = require('jikanjs');

const l = "http://localhost:3000/";

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      anime:''
    }
  }

  componentDidMount(){
    jikanjs.loadUser('kyoharato', 'profile').then((response) => {
      this.setState({anime: response.anime_stats});
      console.log(response);
    })
    .catch((err) => {
    console.error(err); // in case a error happens
})
  }

  render() {
    return (
      <div>
      <div className="tc">
      <Tilt>
        <div className="rainbow">
          <a href={l}>
            <img src="./images/profile.png" alt="avatar" className="ba neon bw3"/>
          </a>
        </div>
        </Tilt>
        <Tagline className="t"/>
        </div>
      <Navbar anime={this.state.anime}/>
      </div>
    );
  }
}

export default Home;
