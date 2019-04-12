import React, { Component } from "react";
import "./App.css";
import loop from "./videoProjet/canicross.mp4";

class Video2 extends Component {
  componentDidMount = () => {
    this.refs.vidRef.pause();
  }

  playVideo = () => {
    this.refs.vidRef.play();
    document.getElementById("video2").className = "mouseHover";
  };

  pauseVideo = () => {
    // Pause as well
    this.refs.vidRef.pause();
    document.getElementById("video2").className = "mouseNotHover";
  };

  render() {
    return (
      <div className="colorBackground">
        <video
          id="video2"
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
          {" "}
          <div className="titreProjet">PAWSIE STORIES </div>{" "}
          <div className="titreProjet"> VIDEO SERIE / COMERCIAL </div>
        </div>
      </div>
    );
  }
}

export default Video2;
