import React, { Component } from "react";
import "./App.css";
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from "./Home.js";
import Project1 from './Project1.js'

class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      document.getElementById("load").style.display = "none"
      document.getElementById("root").className = ""
     this.fade()
    }, 2000);

  }

  fade = () => {
    setTimeout(() => {
      document.getElementById("fadeLoad").className = "fadeLoadingDone"
     this.fade()
    }, 200);
   
  };

  render() {
 
      return (
   <div id="fadeLoad" className="fadeLoading">
        <HashRouter>

        <Switch>
          <Route exact path='/' component={Home} />
       

          <Route path='/project1' component={Project1 } />


        </Switch>
      </HashRouter>
      </div>

      );
      
    

  
   
  }
}

export default App;
