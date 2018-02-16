import React, { Component } from 'react';

export default class Details extends Component {
  constructor(props) {
    super(props)

    this.state = {companies: []}
    this.name = this.props.match.params.name
    this.companie = []
  }
  componentDidMount() {
    fetch('http://ourikas.github.io/companies.json')
    .then(res => res.json())
    .then(dados => this.setState({ companies: dados}))
  }

  render() {
    this.companie = this.state.companies.filter(item => {
      return item.name === this.name
    })

    return (
      <div className="container">
        {this.companie.map(item => 
          <div className="background">
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            
            <h3>endereco</h3>
            <p>{item.address.city} - {item.address.state}</p>
            <p>{item.address.street}</p>
            <p>{item.address.zip}</p>

            <h3>contatos</h3>
            <p>{item.contact.phones}</p>
            <p>{item.contact.site}</p>
            <p>{item.contact.email}</p>
            <p>{item.contact.facebook}</p>
          </div>)}
      </div>
    );
  }
}