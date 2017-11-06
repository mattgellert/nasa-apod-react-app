import React, { Component } from 'react'
import NavBar from './components/NavBar'
import './Favorites.css'

const Favorites = () => {
  return (
    <div className="photos-container">
      <NavBar home='true'/>
      <div className="favorites-display">
        <div className="spacer"/>
        <div className="favorites-description">
          <h1>Welcome to the Favorites Page!</h1>
          <p>This page is currently being built. Come back soon for more!</p>
        </div>
        <div className="spacer"/>
      </div>
    </div>
  )
}

export default Favorites
