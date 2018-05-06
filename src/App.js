import React, { Component } from 'react';
import axios from 'axios';
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
            <Search companies={this.state.companies} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
