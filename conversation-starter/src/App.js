import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home.js'
import InitiatorsContainer from './containers/InitiatorsContainer.js'

function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/initiators" component={InitiatorsContainer} />
    </div>
    </Router>
  );
}

export default App;
