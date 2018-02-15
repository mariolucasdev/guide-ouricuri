import React, { Component } from 'react';
import Item from './Item';

class ListaCompanies extends Component {
  constructor(props) {
    super(props);

    this.state = {companies: [], text: ''};

    this.companiesSearch = [];
  }

  componentWillMount() {
    fetch('http://ourikas.github.io/companies.json')
    .then(response => response.json())
    .then(data => this.setState({companies: data}));
  }

  searchCompanies(event) {
    this.setState({text: event.target.value});
    this.companiesSearch = this.state.companies.filter(item => {
      const itemName = item.name.toUpperCase();
      const textInput = this.state.text.toUpperCase();
      return itemName.indexOf(textInput) > -1;
    });
  }

  render() {
    return (
      <div className="container">

        <h1 className="center logo">Guide Ouricuri</h1>

        <div className="row">
          <div className="col-md-12">
            <input 
              className="form-control"
              value={this.state.text}
              type="text"
              placeholder="search companies..."
              onChange={(text) => this.searchCompanies(text)}
            />
          </div>
        </div>

        {this.companiesSearch.map(companie => (
              <div className="row">
                <div className="col-md-12">
                  <Item key={companie.id} data={companie} />
                </div>
              </div>
        ))}

      </div>
    );
  }
}

export default ListaCompanies;
