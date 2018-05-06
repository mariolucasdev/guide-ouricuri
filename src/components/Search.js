import React, { Component } from 'react';
import Companie from './Companie';

export default class Search extends Component {
  state = {
    text: ''
  };

  filterCompanies = [];

  handlerSearch(evt) {
    this.setState({ text: evt.target.value.trim() });

    this.filterCompanies = this.props.companies.filter(comp => {
      return (
        comp.name.toLowerCase().indexOf(this.state.text.toLowerCase()) > -1
      );
    });
  }

  render() {
    const { text } = this.state;
    const { companies } = this.props;

    return (
      <div>
        <input
          type="text"
          className="input is-primary"
          placeholder="Busque por uma empresa ou local aqui..."
          onChange={evt => this.handlerSearch(evt)}
        />

        <div className="container-list">
          {text !== '' && <Companie data={this.filterCompanies} />}
        </div>
      </div>
    );
  }
}
