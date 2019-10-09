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

<Link to='/'>  <img alt=""  className="exit" onClick={this.Off} src={fleche}  /></Link>
        <div className="emptydiv"> </div>
        <div className="pageBackground">
          <p className="paragraph">
          J'ai de forte conaissance en HTML5, CSS3, Javascript.
          J'utilise React.js, Angular.js, Node et Firebase 
         pour créer des web app qui fonctionne aisément. J'ai beaucoup d'intéret
         et de conaissance en UI/UX, et je prend toujours mes decision pour 
        donner la meilleur expérience possible au end user.
       
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
           <a className="black" href="http://wndrs.ca/game/">PLAY GAME</a>   <a href="http://wndrs.ca/game/" className="black">PLAY GAME</a>   <a  className="black" href="http://wndrs.ca/game/">PLAY GAME</a>   <a className="black" href="http://wndrs.ca/game/">PLAY GAME</a>   
          </div>
        </div>




      </div>
    );
  }
}


export default withRouter(Project6)

