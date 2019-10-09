import React, { Component } from 'react';
import './style.css';
import img1 from "./image/mountaine.jpg"
import img2 from "./image/kite1.jpg"
import img3 from "./image/kite.jpg"
import img4 from "./image/mountaine2.jpg"
import img5 from "./image/mountaine3.jpg"
import img6 from "./image/music.jpg"
import img7 from "./image/dom.jpg"
import img8 from "./image/ben.jpg"
import img9 from "./image/ben2.jpg"
import img10 from "./image/int.jpg"
import fleche from "./image/fleche.png"
import { Link, withRouter } from 'react-router-dom'

class Project1 extends Component {
  state = {
    language:true,
    switchLang:false
  }


  componentWillMount() {
    window.scrollTo(0, 0)
  }

  render() {

    return (
      <div>
          
        

<Link to='/'>  <img alt=""  className="exit" onClick={this.Off} src={fleche}  /></Link>
<div className="emptydiv"> </div>
        <div className="pageBackground">
       <div className="paragraph">

          <p >
          I  texte englaiss am a creative technologist. I use leading edge technology to execute
          creative marketing projects. I combine my motion designer and video
          editor background with my programming skills, to bring creative ideas
          to life. My expertise and my passion for visual
        </p>
       
         
         </div> 
        </div>
        <div className="video-wrapper">
          <div className="youtube">
            <iframe src="https://player.vimeo.com/video/248658478"
              title="demo1"
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
        <div className="image-content">
          <img alt="" src={img5} className=" image" />
        </div>
        <div className="image-content">
          <img alt="" src={img6} className=" image" />
        </div>

        <div className="image-content">
          <img alt="" src={img7} className=" image" />
        </div>

        <div className="image-content">
          <img alt="" src={img8} className=" image" />
        </div>

        <div className="image-content">
          <img alt="" src={img9} className=" image" />
        </div>

        <div className="image-content">
          <img alt="" src={img10} className=" image" />
        </div>



      </div>
    );
  }
}


export default withRouter(Project1)

