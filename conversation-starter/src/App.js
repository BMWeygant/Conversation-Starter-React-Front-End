import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NavBar from './components/NavBar'
import ConvosContainer from './containers/ConvosContainer'
import QuotesContainer from './containers/QuotesContainer'


function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/convos" component={ConvosContainer} />
      <Route path="/about" component={About} />
    </div>
    </Router>
  );
}

export default App;
