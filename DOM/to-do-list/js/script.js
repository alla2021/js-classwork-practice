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
  const inputField = document.createElement('input');

  listItem.classList.add('list__item');
  itemText.classList.add('list__item-text');
  itemText.innerText = item.title;

  inputField.style.display = 'none';
  listItem.append(itemText);
  listItem.append(inputField);
  listItem.insertAdjacentHTML('beforeend', actions);

  listItem.querySelector('.is-complete').addEventListener('click', function () {
    listItem.classList.add('completed')
  })

  listItem.querySelector('.is-delete').addEventListener('click', function () {
    this.closest('.list__item').remove()
  })

  itemText.addEventListener('click', function() {
    this.style.display = 'none';
    inputField.style.display = 'block';
    inputField.value = this.innerText;
  })

  inputField.addEventListener('change', function () {
    this.style.display = 'none';
    itemText.innerText = this.value;
    itemText.style.display = 'block';
  })

  return listItem;
}

function addNewTask(task) {
  const list = document.querySelector('#to-do-list');

  list.append(task);
};

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
});

addTaskBtn.addEventListener('click', function () {
  const value = this.previousElementSibling.value;

  createNewTask(value);
  inputTask.value = '';
  addTaskBtn.setAttribute('disabled', true)
});



const link = document.querySelector('#link');
const form = document.querySelector('#form');

link.addEventListener('click', function (event) {
  console.log(`event`, event)
  event.preventDefault()
})


form.addEventListener('submit', function(event) {
  console.log(`event`, event)
  event.preventDefault();
})

function keyPress() {
  document.addEventListener('keydown', function (event) {
    console.log(`event`, event)
    event.preventDefault();

      // console.log(`event.code`, event.code)
      if (event.ctrlKey && event.code === 'KeyR') {
        console.log(`ControlLeft and KeyR`)
      }
  })
}

keyPress()

// document.removeEventListener('keydown', keyPress)

const box = document.querySelector('#box');

box.addEventListener('mouseenter', function(event) {
  console.log(event)

  const offsetX = event.offsetX;


  this.addEventListener('mousemove', function() {
    console.log('Mouse enter and move')
  })

})



// const playList = [
//   {

//    author: "LED ZEPPELIN",
//    song:"STAIRWAY TO HEAVEN"

//   },

//   {

//    author: "QUEEN",
//    song:"BOHEMIAN RHAPSODY"

//   },
//   {

//    author: "LYNYRD SKYNYRD",
//    song:"FREE BIRD"

//   },

//   {

//    author: "DEEP PURPLE",
//    song:"SMOKE ON THE WATER"

//   },
//   {

//    author: "JIMI HENDRIX",
//    song:"ALL ALONG THE WATCHTOWER"

//   },
//   {

//    author: "AC/DC",
//    song:"BACK IN BLACK"

//   },

//   {

//    author: "QUEEN",

//    song:"WE WILL ROCK YOU"

//   },

//   {

//    author: "METALLICA",

//    song:"ENTER SANDMAN"

//   }
// ];


// function printSongList(arr) {
//   const list = document.querySelector('#songs');

//   for (let item of arr) {
//     const listItem = document.createElement('li');
//     listItem.innerText = item.song;

//     list.append(listItem);
//   }
// }

// printSongList(playList);

// const modalBtn = document.getElementById('modal-btn');
// const modal = document.getElementById('modal');


// modalBtn.addEventListener('click', function () {
//   modal.classList.add('is--open');
// })


// const red = document.querySelector('.red');
// const switchBtn = document.querySelector('#switch');
// // const lights = document.querySelectorAll('.light')

// switchBtn.addEventListener('click', function () {
//   const isRedActive = red.classList.contains('is--active');
//   const isGreenActive = red.classList.contains('is--active');

//   if (!isRedActive) {
//     red.classList.add('is--active');
//   }

//   if (!isGreenActive) {
//     red.classList.remove('is--active');
//     green.classList.add('is--active');
//   }
// })