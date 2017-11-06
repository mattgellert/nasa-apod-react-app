import React, { Component } from 'react'
import PhotoSearch from '../components/Photo/PhotoSearch'
import PhotoCard from '../components/Photo/PhotoCard'
import NavBar from '../components/NavBar'


Date.prototype.addDays = function(days) {
    let date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

export default class PhotosContainer extends Component {

  state = {
    queries: [],
    query: "",
    photo: {},
    photoIndex: 0
  }

  searchHandler = (year, month, day) => {
    console.log('hit search handler')
    this.generateUrls(year, month, day)
  }

  generateUrls(year, month, day) {
    let urls = [];
    let imagesURL = 'https://api.nasa.gov/planetary/apod?api_key=yAB0zruWx3MNSaoBNh9NIke4ycAwSGWtxTHQHOdX&date='
    const allYears = [1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017]
    const allMonths = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
    const allDaysNormal = [
      ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
      ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'],
      ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
      ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
      ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
      ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
      ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
      ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
      ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
      ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
      ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
      ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']
    ]
    const allDaysLeap = [
      ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
      ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29'],
      ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
      ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
      ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
      ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
      ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
      ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
      ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
      ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
      ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
      ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']
    ]

    let inputDay;
    let inputMonth;
    day.length === 1 ? inputDay = '0' + day : inputDay = day
    month.length === 1 ? inputMonth = '0' + month : inputMonth = month
    let inputYear = year

    //refactor...later
    if (!inputYear && inputMonth && inputDay) { //MONTH + DAY
      allYears.forEach(year => {
        if (year % 4 !== 0 && inputMonth === '02' && inputDay === '29') {
          // do nothing
        } else {
          urls.push(`${imagesURL + year}-${inputMonth}-${inputDay}`)
        }
      })
    } else if (inputYear && inputMonth && !inputDay) { //MONTH + YEAR
      if (inputYear % 4 !== 0) {
        allDaysNormal[parseInt(inputMonth) - 1].forEach(day => {
          urls.push(`${imagesURL + inputYear}-${inputMonth}-${day}`)
        })
      } else {
        allDaysLeap[parseInt(inputMonth) - 1].forEach(day => {
          urls.push(`${imagesURL + inputYear}-${inputMonth}-${day}`)
        })
      }
    } else if (!inputYear && !inputMonth && inputDay) { //DAY
      allYears.forEach(year => {
        allMonths.forEach(month => {
          urls.push(`${imagesURL + year}-${month}-${inputDay}`)
        })
      })
    } else if (!inputYear && inputMonth && !inputDay) { //MONTH
      allYears.forEach(year => {
        if (year % 4 === 0){
          allDaysLeap[parseInt(inputMonth) - 1].forEach(day => {
            urls.push(`${imagesURL + year}-${inputMonth}-${day}`)
          })
        } else {
          allDaysNormal[parseInt(inputMonth) - 1].forEach(day => {
            urls.push(`${imagesURL + year}-${inputMonth}-${day}`)
          })
        }
      })
    } else if (inputYear && !inputMonth && !inputDay) { //YEAR
        let start = new Date(`${inputYear}-01-01`)
        let end = new Date(`${inputYear}-12-31`)
        let dates = this.getDates(start, end)
        dates.forEach(date => {
          urls.push(imagesURL + date)
        })
    } else if (inputYear && !inputMonth && inputDay){ // DAY + YEAR
      let thisMonth;
      if (inputYear % 4 === 0){
        allDaysLeap.forEach(function(month, i) {
          i < 9 ? thisMonth = '0' + (i + 1) : thisMonth = (i + 1)
          urls.push(`${imagesURL + inputYear}-${thisMonth}-${inputDay}`)
        })

      } else {
        allDaysNormal.forEach(function(month, i) {
          i < 9 ? thisMonth = '0' + (i + 1) : thisMonth = (i + 1)
          urls.push(`${imagesURL + inputYear}-${thisMonth}-${inputDay}`)
        })

      }
    } else { //MONTH + DAY + YEAR
      let url = imagesURL + year + '-' + month + '-' + day
      this.fetchImage(url)
    }
    if (urls.length !== 0) {
      urls = this.checkUrls(urls)

      this.setState({
        urls
      }, () => {this.fetchImage(this.state.urls[this.state.photoIndex])})
    }
  }

  getDates(startDate, stopDate) {
      let dateArray = new Array();
      let currentDate = startDate;
      while (currentDate <= stopDate) {
          let newDate = new Date(currentDate)
          let newDateFormatted = newDate.toISOString().slice(0,10)
          dateArray.push(newDateFormatted);
          currentDate = currentDate.addDays(1);
      }
      return dateArray;
  }

  checkUrls(urls) {
    const firstImageDate = new Date('1995-06-20')
    const today = new Date((new Date()).toLocaleDateString())

    urls = urls.filter(url => {
      let date = new Date(url.slice(-10))
      return (date > firstImageDate && date < today)
    })

    return urls
  }

  fetchImage(url) {
    fetch(url)
      .then(res => res.json())
      .then(photo => {
        this.setState({
          photo
        })
      });
  }


  nextPhoto = (event) => {
    event.preventDefault()
    if (this.state.photoIndex !== (this.state.urls.length - 1)) {
      this.setState({
        photoIndex: (this.state.photoIndex + 1)
      }, () => {this.fetchImage(this.state.urls[this.state.photoIndex])})
    } else  {
      this.setState({
        photoIndex: 0
      }, () => {this.fetchImage(this.state.urls[this.state.photoIndex])})
    }
  }

  prevPhoto = (event) => {
    event.preventDefault()
    if (this.state.photoIndex !== 0) {
      this.setState({
        photoIndex: (this.state.photoIndex - 1)
      }, () => {this.fetchImage(this.state.urls[this.state.photoIndex])})
    } else  {
      this.setState({
        photoIndex: (this.state.urls.length - 1)
      }, () => {this.fetchImage(this.state.urls[this.state.photoIndex])})
    }
  }

  render() {
    return (
      <div className="photos-container">
        <NavBar handleSubmit={this.searchHandler} home='false'/>
        <PhotoCard photo={this.state.photo} onNext={this.nextPhoto} onPrev={this.prevPhoto} />
      </div>
    )
  }

}
