import React, { Component } from "react";
import "./App.css";
import loop from "./videoProjet/motion.mp4";

class Video3 extends Component {
  playVideo = () => {
    this.refs.vidRef.play();
    document.getElementById("video3").className = "mouseHover";
  };

  pauseVideo = () => {
    // Pause as well
    this.refs.vidRef.pause();
    document.getElementById("video3").className = "mouseNotHover";
  };

  render() {
    return (
      <div className="colorBackground">
        <video
          id="video3"
          className="mouseNotHover"
          ref="vidRef"
          src={loop}
          loop
          type="video/mp4"
          onMouseEnter={this.playVideo}
          onMouseLeave={this.pauseVideo}
        />

        <div className="projectInfo">
          {" "}
          <div className="titreProjet">Titre Du Projet </div>{" "}
          <div className="titreProjet"> Type </div>
        </div>
      </div>
    );
  }
}

export default Video3;
