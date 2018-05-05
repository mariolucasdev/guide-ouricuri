import React, { Component } from "react";
import Companie from "./Companie";
import axios from "axios";

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companies: [],
      text: ""
    };

    this.filterCompanies = [];
  }

  async componentDidMount() {
    const response = await axios.get("http://ourikas.github.io/companies.json");
    this.setState({ companies: response.data });
  }

  handlerSearch(evt) {
    this.setState({ text: evt.target.value.trim() });

    this.filterCompanies = this.state.companies.filter(comp => {
      return (
        comp.name.toLowerCase().indexOf(this.state.text.toLowerCase()) > -1
      );
    });
  }

  render() {
    const { text, companies } = this.state;
    return (
      <div>
        <input
          type="text"
          placeholder="search an companie here..."
          onChange={evt => this.handlerSearch(evt)}
        />

        {text === "" ? (
          <Companie data={companies} />
        ) : (
          <Companie data={this.filterCompanies} />
        )}
      </div>
    );
  }
}
