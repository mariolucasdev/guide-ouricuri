import React, { Component } from "react";

export default class Companie extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.data.map(companie => (
            <li key={companie.id}>
              <h2>{companie.name}</h2>
              <p>{companie.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
