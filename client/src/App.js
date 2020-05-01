import React, { Component } from "react";
import Home from './components/home';
import "tachyons";
import Code from "./components/navs/code";
import Notes from "./components/navs/notes";
import Otaku from "./components/navs/otaku";
import Contact from "./components/navs/contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {

  authenticate(){
  return new Promise(resolve => setTimeout(resolve, 1100)) // 1.1 second
  }

  componentDidMount(){
  this.authenticate().then(() => {
    const e = document.getElementById('loader-wrapper')
    if(e){
      //fade out
      e.classList.add('available')
      setTimeout(() => {
        //remove from DOM
        e.outerHTML = ''
      }, 1000)
    }
  })}

  render() {
    return (
      <div>
        //<header>
          <Home/>
        //</header>
        ////<div>
      ////  <Router>

      ////  </Router>
    ////  </div>
      </div>
    )
  }
}

export default App;
