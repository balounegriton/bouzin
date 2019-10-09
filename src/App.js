import React, { Component } from "react";
import "./App.css";
import { HashRouter, Route, Switch  } from 'react-router-dom'
import Home from "./Home.js";
import HomeEN from "./HomeEN.js";
import Project1 from './component/Project1.js'
import Project2 from './component/Project2.js'
import Project3 from './component/Project3.js'
import Project4 from './component/Project4.js'
import Project5 from './component/Project5.js'
import Project6 from './component/Project6.js'
import Project7 from './component/Project7.js'
import Project1EN from './component/Project1EN.js'
import Project2EN from './component/Project2EN.js'
import Project3EN from './component/Project3EN.js'
import Project4EN from './component/Project4EN.js'
import Project5EN from './component/Project5EN.js'
import Project6EN from './component/Project6EN.js'
import Project7EN from './component/Project7EN.js'
class App extends Component {
  state = {
    francais: true
  };


  componentDidMount() {
    setTimeout(() => {
      document.getElementById("load").style.display = "none"
      document.getElementById("root").className = ""

    }, 2000);

  }

  setEnglish = () => {

    this.setState({
      francais: false
    })

  }

  setFrancais = () => {
    this.setState({
      francais:true

    })

  };



  render() {

    if (this.state.francais === true) {
      return (
        <HashRouter>
          <div className="language-container">
            <div id="fr" className="language-texte-selected" >FR</div>
            <div className="language-slash"> / </div>
            <div id="en" className="language-texte" onClick={this.setEnglish} > EN</div>
          </div>
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


      );
    }

    else {
      return (
        <HashRouter>
          <div className="language-container">
            <div id="fr" className="language-texte" onClick={this.setFrancais} >FR</div>
            <div className="language-slash"> / </div>
            <div id="en" className="language-texte-selected" > EN</div>
          </div>
          <Switch>
            <Route exact path='/' component={HomeEN} />
            <Route path='/demo' component={Project1EN} />
            <Route path='/pawsie' component={Project2EN} />
            <Route path='/motion' component={Project3EN} />
            <Route path='/mural' component={Project4EN} />
            <Route path='/unmarked' component={Project5EN} />
            <Route path='/web' component={Project6EN} />
            <Route path='/stairsmaster' component={Project7EN} />
          </Switch>
        </HashRouter>


      );
    }





  }
}

export default App
