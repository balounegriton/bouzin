import React, { Component } from 'react';
import './App.css';
import Landing from './Landing.js'
import Navbar from './Navbar.js'
import Video1 from './Video1.js'
import Video2 from './Video2.js'
import Video3 from './Video3.js'
import Video4 from './Video4.js'
import Video5 from './Video5.js'
import scrollToComponent from 'react-scroll-to-component';




class App extends Component {


  someMethod   = () => {
    console.log('bar');
    scrollToComponent(this.video55, { offset: 0, align: 'top', duration: 1500 });
}
  render() {

    return (


<div>

<Navbar />
<Landing parentMethod={this.someMethod} /> 

<div className="container-video"> <Video1 /> </div>

<div className="container-video"> <Video2 /> </div>

<div className="container-video"> <Video3 /> </div>

<div className="container-video"> <Video4 ref={(section) => { this.video55 = section; }}  /> </div>


<div className="container-video"> <Video5   /> </div>



</div>
    

        
    );
  }
}

export default App;