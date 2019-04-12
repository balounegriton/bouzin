import React, { Component } from "react";
import "./App.css";

class Navbar extends Component {
  state = {
    open: false
  };
componentWillReceiveProps() {
  this.setState({switchLang: this.props.language})
}


  handleClick = () => {
    if (!this.state.open) {
      document.getElementById("nav").className = "navOpen";
      document.getElementById("plusNav").className = "plusNavOpen";
      document.getElementById("about").className = "About";
      this.setState({
        open: true
      });
    } else {
      document.getElementById("nav").className = "nav";
      document.getElementById("plusNav").className = "plusNav";
      document.getElementById("about").className = "AboutFermer";
      this.setState({
        open: false
      });
    }
  };

  render() {
    return (
      <div id="nav" className="nav">

          <div id="about" className="AboutFermer">
      
       
          <p >
          I  texte english am a creative technologist. I use leading edge technology to execute
          creative marketing projects. I combine my motion designer and video
          editor background with my programming skills, to bring creative ideas
          to life. My expertise and my passion for visual
        </p>
          </div>

   



        <p id="plusNav" className="plusNav" onClick={this.handleClick}>
          +
        </p>
      </div>
    );
  }
}

export default Navbar;
