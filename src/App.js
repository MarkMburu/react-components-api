import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/navabar.component";
import Business from "./components/business.component"
import Science from "./components/science.component"
import Technology from "./components/technology.component"
import Health from "./components/health.component"
import Australia from "./components/australia.component"
import NewZealand from "./components/newzealand.component"
import International from "./components/international.component"
import Sports from "./components/sports.component"
function App() {
  return (
    <Router>
      <Navbar/>
        <br />
        <Route path="/" exact component={International}/>
        <Route path="/australia" component={Australia}/>
        <Route path="/newzealand" component={NewZealand}/>
        <Route path="/business" component={Business}/>
        <Route path="/tech" component={Technology}/>
        <Route path="/science" component={Science}/>
        <Route path="/health" component={Health}/>  
        <Route path="/sports" component={Sports}/> 
    </Router>
    
  );
}

export default App;