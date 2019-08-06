import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home.js'
import YouContainer from './containers/YouContainer.js'

function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/you" component={YouContainer} />
    </div>
    </Router>
  );
}

export default App;
