import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <div class="card">
        <h2>{this.props.data.name}</h2>
        <p>{this.props.data.description}</p>
        <p className="">{this.props.data.contact.phones[0]}</p>
      </div>
    );
  }
}

export default Item;
