import React, { Component } from 'react'
import {
  Link,
} from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
      <div className="">
        <nav class="navbar navbar-toggleable-lg navbar-light bg-faded">
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          {/* <a class="navbar-brand" href="#">Navbar</a> */}
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link to='/'>Home</Link>
              </li>
              <li class="nav-item">
                <Link to='/about'>about</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}