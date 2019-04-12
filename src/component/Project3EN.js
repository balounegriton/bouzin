import React, { Component } from 'react';
import './style.css';
import fleche from "./image/fleche.png"
import { Link, withRouter } from 'react-router-dom'

class Project3 extends Component {

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
            <iframe src="https://player.vimeo.com/video/330110955" 
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
            <iframe src="https://player.vimeo.com/video/237827592"
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


export default withRouter(Project3)

