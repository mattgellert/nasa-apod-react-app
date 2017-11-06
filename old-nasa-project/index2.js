const searchForm = document.getElementById('image-search-form')
const dayInput = document.getElementById('image-search-box-day')
const monthInput = document.getElementById('image-search-box-month')
const yearInput = document.getElementById('image-search-box-year')
const results = document.querySelector('.image-results')
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
const moreButtonContainer = document.createElement('div')
moreButtonContainer.className = 'more-button-container'
const moreButton = document.createElement('button')
moreButton.className = 'more-button'
moreButton.innerText = 'See More!'

let imagesURL = 'https://api.nasa.gov/planetary/apod?api_key=yAB0zruWx3MNSaoBNh9NIke4ycAwSGWtxTHQHOdX&date='
let firstImageDate = new Date('1995-06-20')
let today = new Date((new Date()).toLocaleDateString())
let curr_day = today.toISOString().slice(8,10)
let curr_month = today.toISOString().slice(5,7)
let curr_year = today.toISOString().slice(0,4)
dayInput.value = curr_day
monthInput.value = curr_month
yearInput.value = curr_year

moreButton.addEventListener('click', () => {
  fetchTenImages(urls)
})

Date.prototype.addDays = function(days) {
    let date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

function getDates(startDate, stopDate) {
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

function fetchImages(url){
  // fetch(imagesURL + yearInput.value + '-' + monthInput.value + '-' + dayInput.value)
  fetch(url)
    .then(res => res.json())
    .then(json => {imageRender(json)}); // COME BACK TO THIS MOFO
}

let urls = []
let imageCount = 0
function fetchTenImages(urls){
  moreButtonContainer.innerHTML = ''
  for (let i = 0; i < 10; i++) {
    fetchImages(urls[imageCount])
    imageCount++
  }
  moreButtonContainer.appendChild(moreButton)
  document.querySelector('.bottom').appendChild(moreButtonContainer)
}

function checkUrls(urls){
  urls = urls.filter(url => {
    let date = new Date(url.slice(-10))
    return (date > firstImageDate && date < today)
  })
  return urls
}


searchForm.addEventListener('submit', function(ev) {
  ev.preventDefault();
  results.innerHTML = ''
  imageCount = 0
  urls = []
  let inputDay;
  let inputMonth;
  dayInput.value.length === 1 ? inputDay = '0' + dayInput.value : inputDay = dayInput.value
  monthInput.value.length === 1 ? inputMonth = '0' + monthInput.value : inputMonth = monthInput.value
  let inputYear = yearInput.value

  if (!inputYear && inputMonth && inputDay) { //MONTH + DAY
    allYears.forEach(year => {
      if (year % 4 !== 0 && inputMonth === '02' && inputDay === '29') {
        // do nothing
      } else {
        urls.push(`${imagesURL + year}-${inputMonth}-${inputDay}`)
      }
    })
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
          // fetchImages(`${imagesURL + year}-${inputMonth}-${day}`)
        })
      } else {
        allDaysNormal[parseInt(inputMonth) - 1].forEach(day => {
          urls.push(`${imagesURL + year}-${inputMonth}-${day}`)
          // fetchImages(`${imagesURL + year}-${inputMonth}-${day}`)
        })
      }
    })
  } else if (inputYear && !inputMonth && !inputDay) { //YEAR
      let start = new Date(`${inputYear}-01-01`)
      let end = new Date(`${inputYear}-12-31`)
      let dates = getDates(start, end)
      dates.forEach(date => {
        urls.push(imagesURL + date)
        // fetchImages(imagesURL + date)
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
    let url = imagesURL + yearInput.value + '-' + monthInput.value + '-' + dayInput.value
    return fetchImages(url)
  }
  urls = checkUrls(urls)
  fetchTenImages(urls)
});

function imageRender(json){
  let div = document.createElement('div')
  div.innerHTML =
    `<h2>${json.title} ${json.date}</h2>
    <figure>
      <img src=${json.url} width="80%">
      <figcaption>Courtesy of: ${json.copyright}</figcaption>
    </figure>
    <p>${json.explanation}</p>`
  results.appendChild(div);
}
