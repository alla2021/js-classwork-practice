function makeRequest() {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(function (response) {
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
    list.insertAdjacentHTML('afterbegin', `<li>Name: ${item.title}; Inoffice: ${item.inoffice}</li>`)
  }
}


function showError(error) {
  alert(`Error: ${error.name}`)
}

makeRequest()