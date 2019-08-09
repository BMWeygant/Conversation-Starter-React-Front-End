import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import InitiatorsContainer from './containers/InitiatorsContainer.js'
import TargetsContainer from './containers/TargetsContainer.js'
import ConvosContainer from './containers/ConvosContainer.js'

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/initiators" component={InitiatorsContainer} />
      <Route path="/targets" component={TargetsContainer} />
      <Route path="/convos" component={ConvosContainer} />
    </div>
    </Router>
  );
}

export default App;
