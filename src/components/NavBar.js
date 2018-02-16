import React, { Component } from 'react'
import {
  Link,
} from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <nav class="navbar navbar-toggleable-lg navbar-dark bg-faded">
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            {/* <a class="navbar-brand" href="#">Navbar w/ text</a> */}
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/about">About</a>
                </li>
              </ul>
            </div>
          </nav>

        </div>
      </div>
    )
  }
}