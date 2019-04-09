import React, { Component } from 'react';
import './style.css';

import { Link, withRouter } from 'react-router-dom'
import img1 from "./image/maison.jpg"
import img2 from "./image/skidoo.jpg"
import img3 from "./image/turn.jpg"
import img4 from "./image/sunset.jpg"
class Project5 extends Component {

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
            <iframe src="https://player.vimeo.com/video/319556549"
              title="demo"
              className=""
              frameBorder="0"

              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen></iframe>
          </div>
        </div>

  
        <div className="image-content">
          <img alt="" src={img1} className=" image" />
        </div>
        <div className="image-content">
          <img alt="" src={img2} className=" image" />
        </div>
        <div className="image-content">
          <img alt="" src={img3} className=" image" />
        </div>
        <div className="image-content">
          <img alt="" src={img4} className=" image" />
        </div>

      

    
       



      </div>
    );
  }
}


export default withRouter(Project5)

