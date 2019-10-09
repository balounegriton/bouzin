import React, { Component } from 'react';
import './style.css';
import fleche from "./image/fleche.png"
import { Link, withRouter } from 'react-router-dom'

class Project6 extends Component {

  componentWillMount() {
    window.scrollTo(0, 0)

  }


  render() {

    return (
      <div>

        <Link to='/'>  <img alt="" className="exit" onClick={this.Off} src={fleche} /></Link>
        <div className="emptydiv"> </div>
        <div className="pageBackground">
          <p className="paragraph">

            I have strong knowledge in HTML5, CSS3, Javascript.
             I use technologies like React.js, Angular.js, Node
              and Firebase to create web / mobile web app that
              run smoothly. I have strong skills and interest in UI/UX,
                and always drive my decisions to provide the best to the end users.
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

