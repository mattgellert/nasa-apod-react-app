import React, { Component } from 'react'
import NavBar from './components/NavBar'
import './Home.css'

const Home = () => {
  return (
    <div className="photos-container">
      <NavBar handleSubmit={this.searchHandler} home='true'/>
      <div className="home-display">
        <div className="spacer"/>
        <div className="home-description">
          <h1>Welcome to the NASA APOD Search App!</h1>
          <p>Visit the Photos page to search through NASA's Photo Of The Day. Search by date using one to three of the entry fields. If a field is ommitted, say year, then the results will be all photos on that day/month for every available year. Happy exploring!</p>
        </div>
        <div className="spacer"/>
      </div>
    </div>
  )
}

export default Home
