import React, { Component } from "react";
import "./home.css";
import Head from "./head";
import Navbar from "./navbar";
const jikanjs  = require('jikanjs');

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
      console.error(err);
    })
  }

  render() {
    return (
      <div>
        <Head/>
        <Navbar anime={this.state.anime}/>
      </div>
    );
  }
}

export default Home;
