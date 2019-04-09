import React, { Component } from 'react';
import './style.css';

import { Link, withRouter } from 'react-router-dom'

class Project6 extends Component {

  componentWillMount() {
    window.scrollTo(0, 0)

  }


  render() {

    return (
      <div>

        <Link to='/'> <div className="exit" onClick={this.Off}>x</div></Link>
        <div className="emptydiv"> </div>
        <div className="pageBackground">
          <p className="paragraph">
            I am a creative technologist. I use leading edge technology to execute
            creative marketing projects. I combine my motion designer and video
            editor background with my programming skills, to bring creative ideas
          to life. My expertise and my passion for visual{" "}
          </p>
        </div>
        <div className="video-wrapper">
          <div className="youtube">
            <iframe src="https://player.vimeo.com/video/269197596"
              title="demo"
              className=""
              frameBorder="0"

              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen></iframe>
          </div>
        </div>



        <div className="video-wrapper">
          <div className="youtube">
            <iframe src="https://player.vimeo.com/video/269197637"
              title="demo"
              className=""
              frameBorder="0"

              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen></iframe>
          </div>

        </div>

        <div className="video-wrapper">
          <div className="youtube">
            <iframe src="https://player.vimeo.com/video/265296801"
              title="demo"
              className=""
              frameBorder="0"

              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen></iframe>
          </div>

          <div className="playGame">
           <a href="http://wndrs.ca/game/">PLAY GAME</a>   <a href="http://wndrs.ca/game/">PLAY GAME</a>   <a href="http://wndrs.ca/game/">PLAY GAME</a>   <a href="http://wndrs.ca/game/">PLAY GAME</a>   
          </div>
        </div>




      </div>
    );
  }
}


export default withRouter(Project6)

