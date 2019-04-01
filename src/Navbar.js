import React, { Component } from 'react';
import './App.css';





class Navbar extends Component {



  render() {
    window.onscroll = function () {

        if (document.body.scrollTop >= 800 || document.documentElement.scrollTop > 800 ) {
            document.getElementById("nav").className="nav"
         
        }
        else  {
            document.getElementById("nav").className="hiden"
         
        }
    };
    return (


<div id='nav' className="hiden">
<p className='plusNav'>+</p>
</div>
    

        
    );
  }
}

export default Navbar;