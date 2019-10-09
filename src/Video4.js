import React, { Component } from "react";
import "./App.css";
import loop from "./videoProjet/muralSess.mp4";

class Video4 extends Component {
  componentDidMount = () => {
    this.refs.vidRef.pause();
  }
  
  playVideo = () => {
    this.refs.vidRef.play();
    document.getElementById("video4").className = "mouseHover";
  };

  pauseVideo = () => {
    // Pause as well
    this.refs.vidRef.pause();
    document.getElementById("video4").className = "mouseNotHover lighterMode";
  };

  render() {
    return (
      <div className="colorBackground">
        <video
          id="video4"
          className="mouseNotHover lighterMode"
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
          <div className="titreProjet">MURAL LIVE SESSIONS </div>{" "}
          <div className="titreProjet"> VIDÉO DE MUSIQUE </div>
        </div>
      </div>
    );
  }
}

export default Video4;
