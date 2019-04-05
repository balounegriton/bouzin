import React, { Component } from 'react';
import './App.css';
import yeux from './video web/yeux.mp4';
import ski from './video web/ski.mp4';
import kite from './video web/kite.mp4';
import logoWhite from './logoWhite.png'
import scrollToComponent from 'react-scroll-to-component';



class Landing extends Component {

  scroll = () => {
    this.props.parentMethod();
  }
  hoverOn = () => {
 
  document.getElementById("videoA").className = "texte-hover-video";

  }
  
  
  hoverOn2 = () => {
    document.getElementById("videoB").className = "texte-hover-video2";
    }
    
    
    hoverOn3 = () => {
 
      document.getElementById("videoC").className = "texte-hover-video3";
      }
      
      
      hoverOff = () => {
    
        document.getElementById("videoA").className = "hiding"
        document.getElementById("videoB").className = "hiding";
        document.getElementById("videoC").className = "hiding";
      }

  render() {

    return (
<div className="landing">

<div>
  <div id="videoA" className="hiding"> <div className="dispflex">MOTION</div>   </div>
<video className='introVideo' autoPlay loop muted onMouseEnter={this.hoverOn}
            onMouseLeave={this.hoverOff}>
  <source src={kite} type='video/mp4' />
                 
                </video>    </div>


                <div>
                <div id="videoB" className="hiding"> <div className="dispflex2">WEB DESIGN</div>   </div>
                  <video  className='introVideo2' autoPlay loop muted onMouseEnter={this.hoverOn2}
            onMouseLeave={this.hoverOff}  onClick={this.scroll}>
                    <source src={ski} type='video/mp4' />
                  
                </video></div>


                <div>
                <div id="videoC" className="hiding"> <div className="dispflex3">VIDEO</div>   </div>
                  <video  className='introVideo3' autoPlay loop muted onMouseEnter={this.hoverOn3}
            onMouseLeave={this.hoverOff}>
                    <source src={yeux} type='video/mp4' />
                  
                </video></div>
               
                <div id="titrePortfolio" className="titrePortfolio" >NoeProvost</div>
{/* /////////////// */}


</div>
    



        
    );
  }
}

export default Landing;