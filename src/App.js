import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import ListaCompanies from './components/ListaCompanies';

class App extends Component {

  render() {
    return (
      <Router>
      <div className="App">
        <Route path='/' component={ListaCompanies} />
      </div>
      </Router>
    );
  }
}

export default App;
