import React, { Component } from 'react';
import './style.css';
import fleche from "./image/fleche.png"
import { Link, withRouter } from 'react-router-dom'
import img1 from "./image/winch.jpg"
import img2 from "./image/auto.jpg"
import img3 from "./image/cam.jpg"
import img4 from "./image/snowrail.jpg"
class Project7 extends Component {

  componentWillMount() {
    window.scrollTo(0, 0)

  }


  render() {

    return (
      <div>

<Link to='/'>  <img alt=""  className="exit" onClick={this.Off} src={fleche}  /></Link>
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
            <iframe src="https://player.vimeo.com/video/199738961"
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
        <div className="video-wrapper">
          <div className="youtube">
            <iframe src="https://player.vimeo.com/video/200273778"
              title="demo"
              className=""
              frameBorder="0"

              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen></iframe>
          </div>
        </div>
      

    
       



      </div>
    );
  }
}


export default withRouter(Project7)

