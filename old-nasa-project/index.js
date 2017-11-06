const searchForm = document.getElementById('article-search-form')
const input = document.getElementById('article-search-box')
const results = document.getElementById('article-results')
let imagesURL = 'https://images-api.nasa.gov/search?q='


searchForm.addEventListener('submit', function(ev) {
  ev.preventDefault();
  fetch(imagesURL + `${input.value}`)
    .then(res => res.json())
    .then(json => imageRender(json));
});

function imageRender(obj){
  let counter = 1
  obj.collection.items.forEach(function(item) {
    let div = document.createElement('div')
    div.className = `image-${counter}`
    div.innerHTML = `<h2>${item.data[0].title}</h2><p></p><p>${item.data[0].description}</p>`
    results.appendChild(div);
    fetch(item.href)
      .then(res => res.json())
      .then(json => {
        let image = `<img src='${json[0]}' height="150px">`;
        $(`.image-${counter} p`)[0].innerHTML = image;
        counter++
      })
  })
}














// let url = "https://images-api.nasa.gov/planetary/apod?api_key=yAB0zruWx3MNSaoBNh9NIke4ycAwSGWtxTHQHOdX";

// searchForm.addEventListener('submit', function(ev) {
//   ev.preventDefault();
//   let term = input.value
//   url += '?' + $.param({
//   'q': term
//   });
//   $.ajax({
//     url: url,
//     method: 'GET',
//   }).done(function(result) {
//     articlesRender(result.response.docs);
//   }).fail(function(err) {
//     throw err;
//   });
//   })
//
