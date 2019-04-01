import React, { Component } from "react";
import "./App.css";
import ReactPlayer from "react-player";

class Video1 extends Component {
  state = {
    playing: false,
    mediaStart: false
    
  };


  hoverOn = url => {
    this.setState({ playing: true ,
      MouseOver: true
    })
  
  document.getElementById("video2").className = "mouseHover";
  }
  
  
  hoverOff = url => {
    this.setState({MouseOver:false})
    if (this.state.mediaStart === false ) {
     setTimeout(this.hoverOff,50)
    }
  
  else{
    this.setState({ playing: false })
    document.getElementById("video2").className = "mouseNotHover"
  }
  }


  onPause = () => {
    if(this.state.MouseOver === true) {
console.log("ouvir page")

    }
    this.setState({ playing: false })

  }


  onStart = () => {

    this.setState({ mediaStart: true })



  }
  render() {
    const { playing } = this.state;
    return (
      <div className="colorBackground">
        <div id="video2" className="mouseNotHover">
          <ReactPlayer
            url="https://www.dailymotion.com/video/x74yjih"
            playing={playing}
            onPause={this.onPause}
            onMouseEnter={this.hoverOn}
            onMouseLeave={this.hoverOff}
            onStart={this.onStart}
            width="57vw"
            height="32vw"
          />
        </div>
      </div>
    );
  }
}

export default Video1;
