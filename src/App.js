import React, { Component } from "react";
import "./App.css";
import { HashRouter, Route, Switch, withRouter } from 'react-router-dom'
import Home from "./Home.js";
import Project1 from './component/Project1.js'
import Project2 from './component/Project2.js'
import Project3 from './component/Project3.js'
import Project4 from './component/Project4.js'
import Project5 from './component/Project5.js'
import Project6 from './component/Project6.js'
import Project7 from './component/Project7.js'
class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      document.getElementById("load").style.display = "none"
      document.getElementById("root").className = ""
      this.fade()
    }, 20);

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
            <Route path='/demo' component={Project1} />
            <Route path='/pawsie' component={Project2} />
            <Route path='/motion' component={Project3} />
            <Route path='/mural' component={Project4} />
            <Route path='/unmarked' component={Project5} />
            <Route path='/web' component={Project6} />
            <Route path='/stairsmaster' component={Project7} />
          </Switch>
        </HashRouter>
      </div>

    );





  }
}

export default App
