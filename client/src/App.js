import React, { Component } from "react";
import Home from './components/home';
import "tachyons";

class App extends Component {

  constructor() {
    super()
    this.state = { isLoading: true }
}

  authenticate(){
    return new Promise(resolve => setTimeout(resolve,1100)) //1.1 second
  }

  componentDidMount(){
  this.authenticate().then(() => {
    const e = document.getElementById('loader-wrapper')
    if(e){
      //fade out
      e.classList.add('available')
      setTimeout(() => {
        //remove from DOM
        this.setState({isLoading: false});
        e.outerHTML = ''
      }, 1000)
    }
  })}

  render() {
    return (
    <React.Fragment>
      <div className="loader-wrapper" id="loader-wrapper">
        <span className="loader"><span className="loader-inner"><b>N</b></span></span>
      </div>
      {!this.state.isLoading ? <Home/> : ''}
    </React.Fragment>
    )
  }
}

export default App;
