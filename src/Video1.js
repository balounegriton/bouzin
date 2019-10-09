import React, { Component } from "react";
import "./App.css";
import loop from "./videoProjet/loop.mp4";

// import { isMobile } from 'react-device-detect';



class Video1 extends Component {
  state = {
    mobile: false
  }
  componentWillMount = () => {

  }

  componentDidMount = () => {
    this.refs.vidRef.pause();

  }

  playVideo = () => {
    this.refs.vidRef.play();
    document.getElementById("video1").className = "mouseHover";
  };

  pauseVideo = () => {
    // Pause as well

    this.refs.vidRef.pause();
    document.getElementById("video1").className = "mouseNotHover";
  };

  render() {
    return (
      <div className="colorBackground">
        <video
          id="video1"
          className="mouseNotHover"
          ref="vidRef"
          src={loop}
          type="video/mp4"
          autoPlay
          loop
          muted
          onMouseEnter={this.playVideo}
          onMouseLeave={this.pauseVideo}
        />

        <div className="projectInfo">

          <div className="titreProjet">DEMO REEL </div>
          <div className="titreProjet"> VIDEO </div>
        </div>
      </div>
    );
  }
}

export default Video1;
