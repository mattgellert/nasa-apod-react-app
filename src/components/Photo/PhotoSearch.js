import React, { Component } from 'react'
import './PhotoSearch.css'

export default class PhotoSearch extends Component {

  state = {
    day: "",
    month: "",
    year: ""
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.props.handleSubmit(this.yearInput.value, this.monthInput.value, this.dayInput.value)
  }

  render() {
    return(
      <div className="photo-search">
        <form className="photo-search-form" onSubmit={this.submitHandler.bind(this)}>
          Day: <input className="input" type="text" ref={(input) => { this.dayInput = input }}/>
          Month: <input className="input" type="text" ref={(input) => { this.monthInput = input }}/>
          Year: <input className="input" type="text" ref={(input) => { this.yearInput = input }}/>
          <input className="submit" type="submit" value="Search" />
        </form>
      </div>
    )
  }

}
