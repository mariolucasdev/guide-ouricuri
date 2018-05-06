import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
// import Companie from './components/Companie';
import Details from './components/Details';
import Search from './components/Search';
import 'bulma/css/bulma.css';
import './style.css';

class App extends Component {
  state = {
    companies: []
  };

  async componentDidMount() {
    const response = await axios.get('http://ourikas.github.io/companies.json');
    this.setState({ companies: response.data });
  }

  render() {
    return (
      <div className="section">
        <div className="container is-fluid">
          <div>
            <h1 className="title is-1 logo-title">Agenda Ouricuri</h1>
            <Route
              path="/"
              exact
              render={() => <Search companies={this.state.companies} />}
            />

            <Route
              path="/companie/:name"
              render={() => (
                <div>
                  <Search companies={this.state.companies} />
                  <Details />
                </div>
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
