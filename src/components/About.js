import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div className="container background">
        <h1 className="title-about">Ourikas Reactjs</h1>
        <p className="text-about">Website baseado no projeto Ourikas cujo o autor tanto dos dados usados aqui quanto da ideia de fazer um guia da cidade de Ouricuri é: <a href="https://github.com/mauriciomelo">Mauricio Melo</a></p>
        <p className="text-about">Reposotio oficial do projeto: <a href="">Ourikas</a></p>
        <br />
        <p className="text-about">Reposotio desse projeto: <a href="">Guide Ouricuri</a></p>
        
      </div>
    );
  }
}