import $ from 'jquery';
import f from './factorial.js';
import { addition as add, multiple as mul } from './math.js';

function createTitle(text) {
  const title = document.createElement('h1');

  title.innerText = text;


  // document.body.append(title);
  $('body').append(title)
}

createTitle('Hello Webpack!!!')

console.log(mul(2, 3))
console.log(add(2, 9))
console.log(f(5))