import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import ConvosContainer from './containers/ConvosContainer'

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/convos" component={ConvosContainer} />
    </div>
    </Router>
  );
}

export default App;
