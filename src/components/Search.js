import React, { Component } from 'react';
import Companie from './Companie';

export default class Search extends Component {
  state = {
    text: '',
    index: ''
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

  clearValue = e => {
    const index = e.target.attributes.src.baseURI.split('/').slice(-1)[0];
    this.setState({ index });
    this.setState({ text: '' });
  };

  render() {
    const { text } = this.state;

    return (
      <div>
        <input
          type="text"
          className="input is-primary"
          value={text}
          placeholder="Busque por uma empresa ou local aqui..."
          onChange={evt => this.handlerSearch(evt)}
        />

        <div className="container-list">
          {text !== '' && (
            <Companie
              data={this.filterCompanies}
              handleClick={evt => this.clearValue(evt)}
            />
          )}
        </div>
      </div>
    );
  }
}
