const title = document.getElementById('title');
const box = document.getElementsByClassName('box');
const span = document.getElementsByTagName('span');

console.log(`title`, title);
console.log(`box`, box);
console.log(`span`, span);

const subTitle = document.querySelector('#subtitle');
const elements = document.querySelectorAll('.box');

console.log(`subTitle`, subTitle)
console.log(`element`, elements)

// const header = document.createElement('header');

// console.log(`header`, header);

// header.append(subTitle);

const afterBegin = document.createElement('p')

// header.insertAdjacentHTML('afterend', )
// header.insertAdjacentHTML('beforebegin')
// header.insertAdjacentHTML('beforeend', )


document.write('<header id="header"></header>')

const headerById = document.getElementById('header');

headerById.insertAdjacentHTML('afterbegin', `<h2>After Begin</h2>`);
headerById.insertAdjacentHTML('afterend', `<h2>After End</h2>`);
headerById.insertAdjacentHTML('beforebegin', `<h2>Before Begin</h2>`);
headerById.insertAdjacentHTML('beforeend', `<h2>Before End</h2>`);



