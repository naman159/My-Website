import React, { Component } from "react";
import "./home.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Code from "./navs/code/code";
import Notes from "./navs/notes/notes";
import Otaku from "./navs/otaku/otaku";
import Contact from "./navs/contact/contact";

const l = "http://localhost:3000/";

class Navbar extends Component {

  constructor(props){
    super(props);
    this.state = {
      color1: "ba w-15 pa3 mr1 dim link hover neon",
      color2: "ba w-15 pa3 mr1  dim link hover neon",
      color3: "ba w-15 pa3 mr1  dim link hover neon",
      color4: "ba w-15 pa3 mr1  dim link hover neon",
    }
  }

  changeColor1 = () => {
    this.setState({
      color1: "ba w-15 pa3 mr1 link hover neon route",
      color2: "ba w-15 pa3 mr1  dim link hover neon",
      color3: "ba w-15 pa3 mr1  dim link hover neon",
      color4: "ba w-15 pa3 mr1  dim link hover neon" });
  }

  changeColor2 = () => {
    this.setState({
      color1: "ba w-15 pa3 mr1 dim link hover neon",
      color2: "ba w-15 pa3 mr1 link hover neon route",
      color3: "ba w-15 pa3 mr1 dim link hover neon",
      color4: "ba w-15 pa3 mr1 dim link hover neon" });
  }

  changeColor3 = () => {
    this.setState({
      color1: "ba w-15 pa3 mr1 dim link hover neon",
      color2: "ba w-15 pa3 mr1 dim link hover neon",
      color3: "ba w-15 pa3 mr1 link hover neon route",
      color4: "ba w-15 pa3 mr1 dim link hover neon" });
  }

  changeColor4 = () => {
    this.setState({
      color1: "ba w-15 pa3 mr1 dim link hover neon",
      color2: "ba w-15 pa3 mr1 dim link hover neon",
      color3: "ba w-15 pa3 mr1 dim link hover neon",
      color4: "ba w-15 pa3 mr1 link hover neon route" });
  }

  render() {
    return (

          <Router>
            <div className="flex flex-wrap justify-center">
              <a style={{display: "table-cell"}} href="https://github.com/naman159" target="_blank" rel="noopener noreferrer">
                <div className="ba w-15 pa3 mr1  dim link hover neon">
                  <code>GitHub</code>
                </div>
              </a>
              <a style={{display: "table-cell"}} href="https://www.linkedin.com/in/nranawat/" target="_blank" rel="noopener noreferrer">
                <div className="ba w-15 pa3 mr1  dim link hover neon">
                  <code>LinkedIn</code>
                </div>
              </a>
              <Link to="/code">
                <div onClick={this.changeColor1} className={this.state.color1}>
                  <code>Code</code>
                </div>
              </Link>
              <Link to="/otaku">
                <div onClick={this.changeColor2} className={this.state.color2}>
                  <code>Anime/Manga</code>
                </div>
              </Link>
              <Link to='/notes'>
                <div onClick={this.changeColor3} className={this.state.color3}>
                  <code>Notes</code>
                </div>
              </Link>
              <Link to='/contact'>
                <div onClick={this.changeColor4} className={this.state.color4}>
                  <code>Contact</code>
                </div>
              </Link>
            </div>

            <div className="center">
              <Switch>
                <Route exact path="/code" component={Code} />
                <Route exact path="/notes" component={Notes} />
                <Route exact path="/otaku" component={Otaku} />
                <Route exact path="/contact" component={Contact} />
              </Switch>
            </div>
          </Router>
    );
  }
}

export default Navbar;
