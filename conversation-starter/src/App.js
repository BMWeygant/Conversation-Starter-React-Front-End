import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ConvosContainer from './containers/ConvosContainer'


function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/convos" component={ConvosContainer} />
      <Route path="/about" component={About} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
