import React, { Component } from 'react';
import './App.css';





class Navbar extends Component {
  state = {
    open: false,
  
  };

  handleClick = () => {
if(!this.state.open){
  document.getElementById("nav").className = "navOpen";
  document.getElementById("plusNav").className = "plusNavOpen";
  document.getElementById("about").className = "About";
  this.setState({
    open: true,
  })
}
  else{
    document.getElementById("nav").className = "nav";
    document.getElementById("plusNav").className = "plusNav";
    document.getElementById("about").className = "AboutFermer";
    this.setState({
      open: false,
    })
  }


  }


  render() {

    return (


<div id='nav' className="nav" onClick={this.handleClick}>
<p id="about" className='AboutFermer'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
<p id="plusNav" className='plusNav'>+</p>
</div>
    

        
    );
  }
}

export default Navbar;