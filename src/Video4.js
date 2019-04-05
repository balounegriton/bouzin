import React, { Component } from "react";
import "./App.css";
import loop from './video web/loop.mp4';

class Video4 extends Component {

    playVideo = () => {

   
        this.refs.vidRef.play();
        document.getElementById("video4").className = "mouseHover";
    
    }
    
    pauseVideo = () =>{
      // Pause as well
      this.refs.vidRef.pause();
      document.getElementById("video4").className = "mouseNotHover"
    }
    
    // You can pass your function references to your child components as props (here passing down to the Buttons component)
    render() {
      return(
        <div className="colorBackground">
          <video id="video4" className="mouseNotHover" ref="vidRef" src={loop} type="video/mp4"  onMouseEnter={this.playVideo}
            onMouseLeave={this.pauseVideo}></video>
          
          <div className="projectInfo">   <div className="titreProjet">Titre Du Projet  </div>  <div className="titreProjet"> Type  </div></div>
        </div>
      );
    }
  }
  



export default Video4;