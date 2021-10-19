function makeRequest() {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => {
    return response.json()
  })
  .then(function (data) {
    renderList(data)
  })
  .catch(function(error) {
    showError(error)
  })
}


function renderList(data) {
  const list = document.querySelector('#list');

  for (let item of data) {
    list.insertAdjacentHTML('afterbegin', `<li>Name: ${item.title};`)
  }
}

function showError(error) {
  alert(`Error: ${error.name}`)
}

makeRequest()

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '045fa3048d68107b3e16130861ad8e7a';

// https://api.themoviedb.org/3/movie/550?api_key=045fa3048d68107b3e16130861ad8e7a


function makeMovieRequest(path) {
  fetch(`${API_URL}/movie/${path}?api_key=${API_KEY}&page=2`)
    .then(function (response) {
      return response.json()
    }).then(function (data) {

      for (let i = 0; i < data.total_pages; i++) {
        makeSearch('avatar', i)
      }
      // if (data.results) {
      //   renderList(data.results)
      // }
  })
}

function fetchPopular() {
  makeMovieRequest('popular')
}

function fetchLates() {
  makeMovieRequest('latest')
}


// fetchPopular()
// fetchLates()

// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

function makeSearch(query, page) {
  fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`)
}

// makeSearch('avatar')


document.querySelector('#button').addEventListener('click', function () {
  makeSearch('avatar', 4)
});