import React, { Component } from "react";
import "./App.css";
import yeux from "./videoIntro//yeux.mp4";
import ski from "./videoIntro/ski.mp4";
import kite from "./videoIntro/kite.mp4";

class Landing extends Component {
  
  
  scroll = () => {
    this.props.parentMethod();
  };
  scroll2 = () => {
    this.props.parentMethod2();
  };
  scroll3 = () => {
    this.props.parentMethod3();
  };


  hoverOn = () => {
    document.getElementById("videoA").className = "texte-hover-video";

  };

  hoverOn2 = () => {
    document.getElementById("videoB").className = "texte-hover-video2";
  };

  hoverOn3 = () => {
    document.getElementById("videoC").className = "texte-hover-video3";
  };

  hoverOff = () => {
    document.getElementById("videoA").className = "hiding";
    document.getElementById("videoB").className = "hiding";
    document.getElementById("videoC").className = "hiding";
  };

  render() {
    return (
      <div className="landing">
        <div>
          <div id="videoA" className="hiding">
            <div className="dispflex">ABOUT</div>
          </div>
          <video
            className="introVideo"
            autoPlay
            loop
            muted
            onMouseEnter={this.hoverOn}
            onMouseLeave={this.hoverOff}
            onClick={this.scroll}
          >
            <source src={kite} type="video/mp4" />
          </video>{" "}
        </div>

        <div>
          <div id="videoB" className="hiding">
            {" "}
            <div className="dispflex2">DEMO</div>{" "}
          </div>
          <video
            className="introVideo2"
            autoPlay
            loop
            muted
            onMouseEnter={this.hoverOn2}
            onMouseLeave={this.hoverOff}
            onClick={this.scroll3}
          >
            <source src={ski} type="video/mp4" />
          </video>
        </div>

        <div>
          <div id="videoC" className="hiding">
            {" "}
            <div className="dispflex3">PORTFOLIO</div>{" "}
          </div>
          <video
            className="introVideo3"
            autoPlay
            loop
            muted
            onMouseEnter={this.hoverOn3}
            onMouseLeave={this.hoverOff}
            onClick={this.scroll2}
          >
            <source src={yeux} type="video/mp4" />
          </video>
        </div>

        <div id="titrePortfolio" className="titrePortfolio">
          BASILE
        </div>
      </div>
    );
  }
}

export default Landing;
