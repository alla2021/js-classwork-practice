// const todos = [
//   {
//     title: 'Help to mum',
//     completed: false,
//   },
//   {
//     title: 'Go to shop',
//     completed: false,
//   },
// ]

function renderTaskElement(item) {
  const listItem = document.createElement('li');
  const itemText = document.createElement('p');
  const actions = `<div class="list__item-actions">
    <button class="list__item-btn is-complete">Complete</button>
    <button class="list__item-btn is-delete">Delete</button>
  </div>`;

  listItem.classList.add('list__item');
  itemText.classList.add('list__item-text');
  itemText.innerText = item.title;


  listItem.append(itemText);
  listItem.insertAdjacentHTML('beforeend', actions);

  listItem.querySelector('.is-complete').addEventListener('click', function () {
    listItem.classList.add('completed')
  })

  listItem.querySelector('.is-delete').addEventListener('click', function () {
    this.closest('.list__item').remove()
  })

  return listItem;
}


function addNewTask(task) {
  const list = document.querySelector('#to-do-list');

  list.append(task)
}

// function renderListTask(arr) {
//   for (let item of arr) {
//     const task = renderTaskElement(item);

//     addNewTask(task);
//   }
// }

// renderListTask(todos);

const inputTask = document.querySelector('#input-task');
const addTaskBtn = document.querySelector('#add-task');

function createNewTask(value) {
  const newTask = {
    title: value,
    completed: false
  }

  const task = renderTaskElement(newTask);

  addNewTask(task);
}

inputTask.addEventListener('input', function (event) {
  const value = event.target.value;

  if (value.trim()) {
    addTaskBtn.removeAttribute('disabled')
  } else {
    addTaskBtn.setAttribute('disabled', true)
  }
})

addTaskBtn.addEventListener('click', function () {
  const value = this.previousElementSibling.value;

  createNewTask(value);
  inputTask.value = '';
  addTaskBtn.setAttribute('disabled', true)
})

