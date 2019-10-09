import React, { Component } from 'react';
import './style.css';
import fleche from "./image/fleche.png"
import { Link, withRouter } from 'react-router-dom'

class Project4 extends Component {

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
            <iframe title="allo2" width="560" height="315" src="https://www.youtube-nocookie.com/embed/D4YjpEfn1oc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>

        <div className="video-wrapper">
          <div className="youtube">
            <iframe title="allo" width="560" height="315" src="https://www.youtube-nocookie.com/embed/oYAOZD-p-EU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>



        <div className="video-wrapper">
          <div className="youtube">
            <iframe width="560" height="315 " title="v"  src="https://www.youtube-nocookie.com/embed/JIs61uSy7hg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>


        <div className="video-wrapper">
          <div className="youtube">
            <iframe width="560" height="315" title="v" src="https://www.youtube-nocookie.com/embed/IvJ8qGchq4w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>


        <div className="video-wrapper">
          <div className="youtube">
            <iframe width="560" height="315" title="v" src="https://www.youtube-nocookie.com/embed/OvBtELAx5kk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        <div className="video-wrapper">
          <div className="youtube">
            <iframe width="560" height="315"  title="v" src="https://www.youtube-nocookie.com/embed/3fUcPwNzqSM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>

        <div className="video-wrapper">
          <div className="youtube">
          <iframe width="560" height="315" title="v" src="https://www.youtube-nocookie.com/embed/6RLO8HVh76Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           </div>
        </div>

        <div className="video-wrapper">
          <div className="youtube">
          <iframe width="560" height="315" title="v" src="https://www.youtube-nocookie.com/embed/7t07c23Q1eY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           </div>
        </div>

      </div>
    );
  }
}


export default withRouter(Project4)

