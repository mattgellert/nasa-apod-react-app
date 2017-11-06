import React, { Component } from 'react'
import './NavBar.css';
import { NavLink } from 'react-router-dom'
import PhotoSearch from '../Photo/PhotoSearch'


class NavBar extends Component {
  render() {
    if (this.props.home === 'false') {
      return (
        <div className="Nav">
          <div className="nav-elements">
            <div className="left">
              <PhotoSearch handleSubmit={this.props.handleSubmit}/>
            </div>
            <div className="right">
              <div className="tab">
                <a className="link" href="/Home">Home</a>
              </div>
              <div className="tab">
                <a className="link" href="/photos">Photos</a>
              </div>
              <div className="tab">
                <a className="link" href="/favorites">Favorites</a>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="Nav">
          <div className="nav-elements">
            <div className="left">
            </div>
            <div className="right">
              <div className="tab">
                <a className="link" href="/Home">Home</a>
              </div>
              <div className="tab">
                <a className="link" href="/photos">Photos</a>
              </div>
              <div className="tab">
                <a className="link" href="/favorites">Favorites</a>
              </div>
            </div>
          </div>
        </div>
      )
    }

  }
}

export default NavBar
//
// <ul>
//   <li><a href="/">Home</a></li>
//   <li><NavLink to="/photos">Photos</NavLink></li>
//   <li><a href="/favorites">Favorites</a></li>
//   <PhotoSearch handleSubmit={this.props.handl}/>
// </ul>
