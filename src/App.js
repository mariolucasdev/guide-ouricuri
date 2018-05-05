import React, { Component } from "react";
import Search from "./components/Search";
import "bulma/css/bulma.css";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div className="section">
        <div className="container is-fluid">
          <div>
            <h1 className="title is-1 logo-title">Agenda Ouricuri</h1>
            <Search />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
