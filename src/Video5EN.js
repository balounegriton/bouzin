import React, { Component } from "react";
import "./App.css";
import loop from "./videoProjet/unmarked.mp4";

class Video5 extends Component {
  componentDidMount = () => {
    this.refs.vidRef.pause();
  }

  playVideo = () => {
    this.refs.vidRef.play();
    document.getElementById("video5").className = "mouseHover";
  };

  pauseVideo = () => {
    // Pause as well
    this.refs.vidRef.pause();
    document.getElementById("video5").className = "mouseNotHover darkerMode";
  };

  render() {
    return (
      <div className="colorBackground">
        <video
          id="video5"
          className="mouseNotHover darkerMode"
          ref="vidRef"
          src={loop}
          autoPlay
          loop
          muted
          type="video/mp4"
          onMouseEnter={this.playVideo}
          onMouseLeave={this.pauseVideo}
        />

        <div className="projectInfo">
          {" "}
          <div className="titreProjet">UNMARKED</div>{" "}
          <div className="titreProjet"> BACKCONTRY SKI</div>
        </div>
      </div>
    );
  }
}

export default Video5;
