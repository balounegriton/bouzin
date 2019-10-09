import React, { Component } from "react";
import "./App.css";
import Landing from "./Landing.js";
import About from "./about/About.js";
import Video1 from "./Video1.js";
import Video2 from "./Video2.js";
import Video3 from "./Video3.js";
import Video4 from "./Video4.js";
import Video5 from "./Video5.js";
import Video6 from "./Video6.js";
import Video7 from "./Video7.js";
import scrollToComponent from "react-scroll-to-component";
import { Link, withRouter } from 'react-router-dom'

class Home extends Component {
  state = {
    language: true
  }




  scrollMotion = () => {

    scrollToComponent(this.sectionMotion, {
      offset: 0,
      align: "top",
      duration: 1500
    });
  };


  scrollVideo = () => {

    scrollToComponent(this.sectionDemo, {
      offset: 0,
      align: "top",
      duration: 1500
    });
  };


  scrollWeb = () => {

    scrollToComponent(this.sectionWeb, {
      offset: 0,
      align: "top",
      duration: 1500
    });
  };


 
  render() {

    return (


      <div>
   
  

        <Landing parentMethod={this.scrollMotion} parentMethod2={this.scrollVideo} parentMethod3={this.scrollWeb} />
        <About />
        <Link to="/demo"><div className="container-video" >
          <Video1 ref={section => {
            this.sectionDemo = section;
          }}
          />
        </div></Link>

        <Link to='/pawsie'  > <div className="container-video">
          <Video2 />
        </div></Link>

        <Link to='/motion'  > <div className="container-video">
          <Video3
            ref={section => {
              this.sectionMotion = section;
            }} />
        </div>
        </Link>


        <Link to='/mural'  >
          <div className="container-video">
            <Video4
 
            />
           </div>
        </Link>

        
        <Link to='/unmarked'  >
          <div className="container-video">
            <Video5 />
          </div>
        </Link>
        <Link to='/stairsmaster'  >
          <div className="container-video">
            <Video7 />
          </div>
        </Link>
        <Link to='/web'  >
          <div className="container-video last">
            <Video6
              ref={section => {
                this.sectionWeb = section;
              }}
            />
          </div>
        </Link>
      </div>
    );





  }
}


export default withRouter(Home)
