import React, { Component } from "react";
import "./App.css";
import loop from "./videoProjet/webDevloppement.mp4";

class Video6 extends Component {
  componentDidMount = () => {
    this.refs.vidRef.pause();
  }

  playVideo = () => {
    this.refs.vidRef.play();
    document.getElementById("video6").className = "mouseHover";
  };

  pauseVideo = () => {
    // Pause as well
    this.refs.vidRef.pause();
    document.getElementById("video6").className = "mouseNotHover ";
  };

  render() {
    return (
      <div className="colorBackground">
        <video
          id="video6"
          className="mouseNotHover "
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
          <div className="titreProjet">WEB </div>{" "}
          <div className="titreProjet"> JAVASCRIPT / REACT </div>
        </div>
      </div>
    );
  }
}

export default Video6;
