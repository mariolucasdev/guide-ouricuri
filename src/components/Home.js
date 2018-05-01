import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { companies: [], text: '' };
    this.search = this.search.bind(this);

    this.companiesSearch = [];
  }

  componentDidMount() {
    fetch('http://ourikas.github.io/companies.json')
      .then(res => res.json())
      .then(dados => this.setState({ companies: dados }));
  }

  search(text) {
    this.setState({ text: text.target.value });
    if (text.target.value === '') {
      this.companiesSearch = [];
    } else {
      this.companiesSearch = this.state.companies.filter(item => {
        const itemName = item.name.toUpperCase();
        const textInput = this.state.text.toUpperCase();
        return itemName.indexOf(textInput) > -1;
      });
    }
  }

  render() {
    return (
      <div>
        <h1 className="title">Guide Ouricuri</h1>
        <input
          type="text"
          placeholder="search un company..."
          className="form-control"
          onChange={text => this.search(text)}
        />

        {this.companiesSearch.map(item => (
          <Link to={`/details/${item.name}`} key={item.id}>
            <div class="card content">
              {/* <img class="card-img-top" src="..." alt="Card image cap" /> */}
              <div class="card-block">
                <h4 class="card-title">{item.name}</h4>
                <p class="card-text">{item.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}
