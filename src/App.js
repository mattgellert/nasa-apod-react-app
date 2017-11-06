import React, { Component } from 'react'
import PhotosContainer from './containers/PhotosContainer'
import { Route } from 'react-router-dom'
import Home from './Home'
import Favorites from './Favorites'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="Main">
          <Route exact path="/home" component={Home}/>
          <Route exact path="/photos" component={PhotosContainer}/>
          <Route exact path="/favorites" component={Favorites}/>
        </div>
      </div>
    )
  }

}

export default App
