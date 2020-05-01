import React, { Component } from "react";
//import "./App.css";
import Home from './components/home'
import "tachyons"

class App extends Component {
  authenticate(){
  return new Promise(resolve => setTimeout(resolve, 1100)) // 1.1 second
}

componentDidMount(){
  this.authenticate().then(() => {
    const e = document.getElementById('loader-wrapper')
    if(e){
      // fade out
      e.classList.add('available')
      setTimeout(() => {
        // remove from DOM
        e.outerHTML = ''
      }, 1000)
    }
  })}

  render() {
    return (
      <Home />
    )
  }
}

export default App;
