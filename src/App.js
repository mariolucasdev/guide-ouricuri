import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Details from './components/Details';
import NavBar from './components/NavBar';
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
        <header className="">
          <NavBar />
          
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          {/* <Route path='/new' component={New} /> */}
          <Route path='/details/:name' component={Details} />
        </header>
      </div>
      </Router>
    );
  }
}

export default App;
