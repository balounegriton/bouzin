import React, { Component } from "react";
import "./App.css";
import ReactPlayer from "react-player";

class Video1 extends Component {
  state = {
    playing: true,
    mediaStart: false
    
  };


  hoverOn = () => {
    if (this.state.readytoPlay === true ) {
    this.setState({ playing: true ,
      MouseOver: true
    })
  }
  document.getElementById("video1").className = "mouseHover";
  }
  
  
  hoverOff = () => {
    this.setState({MouseOver:false})
    if (this.state.readytoPlay === true) {
    
      this.setState({ playing: false })
    }
    document.getElementById("video1").className = "mouseNotHover"

  }


  onPause = () => {
    if(this.state.MouseOver === true) {
console.log("ouvir page")

    }
    this.setState({ playing: false })

  }


  readytoPlay = () => {
    this.setState({ playing: false,
                    readytoPlay: true })
  }

  onStart = () => {
    this.setState({ mediaStart: true })
    setTimeout(this.readytoPlay, 300);
  }
  render() {
    const { playing } = this.state;
    return (
      <div className="colorBackground">
        <div id="video1" className="mouseNotHover">
          <ReactPlayer
            url="https://player.vimeo.com/video/148894857?api=1&background=1&mute=0"
            playing={playing}
            onPause={this.onPause}
            onMouseEnter={this.hoverOn}
            onMouseLeave={this.hoverOff}
            onStart={this.onStart}
            width="57vw"
            height="32vw"
            preload='true'
            
          />
         </div>
      </div>
    );
  }
}

export default Video1;
