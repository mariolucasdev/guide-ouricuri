import React, { Component } from 'react';
import axios from 'axios';

export default class Details extends Component {
  state = {
    companies: []
  };

  async componentDidMount() {
    const response = await axios.get('http://ourikas.github.io/companies.json');
    this.setState({ companies: response.data });
  }

  render() {
    return (
      <div>
        <div>
          <br />
          <h1>{console.log(this.props.match.params.uri)}</h1>
        </div>
      </div>
    );
  }
}
