import React, { Component } from "react";
import "./home.css";
import Head from "./head";
import Navbar from "./navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const jikanjs = require('jikanjs');

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      anime:'',
      color1:'notneonn',
      color2:'notneonn',
      color3:'notneonn',
      color4:'notneonn',
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
      <div className="flex flex-wrap justify-between">
        <div className="center">
        <div className="ml4">
        <Head anime={this.state.anime}/>
        </div>

        </div>

        <div className="tr">
        <div className="flex flex-column mr4 mt2">

        <div className="isize pa2">
          <a style={{display: "table-cell"}} href="https://www.github.com/naman159" target="_blank" rel="noopener noreferrer"
            onMouseOver={() => { this.setState({color1: "rainbow neon grow"})}}
            onMouseOut={() => { this.setState({color1: "notneonn grow"})}}
            >
            <FontAwesomeIcon icon={['fab', 'github']} className={this.state.color1}/>
          </a>
        </div>

          <div className="isize pa2">
            <a style={{display: "table-cell"}} href="https://www.linkedin.com/in/nranawat/" target="_blank" rel="noopener noreferrer"
            onMouseOver={() => { this.setState({color2: "rainbow neon grow"})}}
            onMouseOut={() => { this.setState({color2: "notneonn grow"})}}
            >
              <FontAwesomeIcon icon={['fab', 'linkedin']} className={this.state.color2}/>
            </a>
          </div>

          <div className="isize pa2"
            onMouseOver={(e) => { e.target.style.color3 = '#64FFDA' }}
            onMouseOut={(e) => { e.target.style.color3 = '#8892B0' }}>
            <a style={{display: "table-cell"}} href="https://www.instagram.com/trademarkedsetups/" target="_blank" rel="noopener noreferrer"
            onMouseOver={() => { this.setState({color3: "rainbow neon grow"})}}
            onMouseOut={() => { this.setState({color3: "notneonn grow"})}}
            >
            <FontAwesomeIcon icon={['fab', 'instagram']} className={this.state.color3}/>
            </a>
          </div>

          <div className="isize pa2"
            onMouseOver={(e) => { e.target.style.color4 = '#64FFDA' }}
            onMouseOut={(e) => { e.target.style.color4 = '#8892B0' }}>
            <a style={{display: "table-cell"}} href="https://twitter.com/naman1591" target="_blank" rel="noopener noreferrer"
            onMouseOver={() => { this.setState({color4: "rainbow neon grow"})}}
            onMouseOut={() => { this.setState({color4: "notneonn grow"})}}
            >
            <FontAwesomeIcon icon={['fab', 'twitter']} className={this.state.color4}/>
            </a>
          </div>

        </div>

        </div>
      </div>
    );
  }
}

export default Home;
