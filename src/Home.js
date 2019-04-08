import React, { Component } from "react";
import "./App.css";
import Landing from "./Landing.js";
import Navbar from "./Navbar.js";
import Video1 from "./Video1.js";
import Video2 from "./Video2.js";
import Video3 from "./Video3.js";
import Video4 from "./Video4.js";
import Video5 from "./Video5.js";
import scrollToComponent from "react-scroll-to-component";
import { Link, withRouter } from 'react-router-dom'

class Home extends Component {

  componentDidMount() {
   

  }


  someMethod = () => {
 
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
  render() {

    return (


      <div>
        <Navbar />

        <Landing parentMethod={this.someMethod} parentMethod2={this.scrollVideo} />

        <Link to='/demo' ><div className="container-video" >
          <Video1 ref={section => {
              this.sectionDemo = section;
            }} />
        </div></Link>

        <Link to='/demo'  > <div className="container-video">
          <Video2 />
        </div></Link>

        <div className="container-video">
          <Video3 
            ref={section => {
              this.sectionMotion = section;
            }}/>
        </div>

        <div className="container-video">
          <Video4
          
          />
        </div>

        <div className="container-video last">
          <Video5 />
        </div> 
      </div>
    );





  }
}


export default withRouter(Home)
