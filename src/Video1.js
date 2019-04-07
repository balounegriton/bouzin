import React, { Component } from "react";
import "./App.css";
import loop from "./videoProjet/unmarked.mp4";

class Video1 extends Component {
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
          loop
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

export default Video1;
