import React, { Component } from 'react';
import './App.css';
import Landing from './Landing.js'
import Navbar from './Navbar.js'
import Video1 from './Video1.js'
import Video2 from './Video2.js'




class App extends Component {




  render() {

    return (


<div>

<Navbar />
<Landing /> 

<div className="container-video"> <Video1 /> </div>

<div className="container-video">  <Video2/></div>

</div>
    

        
    );
  }
}

export default App;