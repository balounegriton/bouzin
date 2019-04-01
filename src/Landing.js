import React, { Component } from 'react';
import './App.css';
import loopVideo from './loop.mp4';
import logoWhite from './logoWhite.png'



class Landing extends Component {




  render() {

    return (
<div className="landing">
<img className="logoWhite" id="logoW2" src={logoWhite} alt={"logo"} />
<div><video className='introVideo' autoPlay loop muted>
                    <source src={loopVideo} type='video/mp4' />
                </video></div>
                <p className="titrePortfolio">Noé Provost Portfolio</p>

</div>
    

        
    );
  }
}

export default Landing;