import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ConvosContainer from './containers/ConvosContainer'
import QuotesContainer from './containers/QuotesContainer'
import CommentsContainer from './containers/CommentsContainer';
import QuoteItem from './components/QuoteItem';


function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/convos" component={ConvosContainer} />
      <Route exact path="/quotes" component={QuotesContainer} />
      <Route path="/quotes/:id" component={QuoteItem} />
      <Route path="/about" component={About} />
      <Route path="/comments" component={CommentsContainer} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
