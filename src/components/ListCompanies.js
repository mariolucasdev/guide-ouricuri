import React, { Component } from "react";
import Companie from "./Companie";
import axios from "axios";

export default class ListCompanies extends Component {
  state = {
    companies: []
  };

  async componentDidMount() {
    const response = await axios.get("http://ourikas.github.io/companies.json");
    this.setState({ companies: response.data });
  }

  render() {
    return (
      <div>
        <Companie data={this.state.companies} />
      </div>
    );
  }
}
