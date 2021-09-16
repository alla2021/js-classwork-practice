
// "условие" ? "1" : "2"

// true ? 1 : 2

// if (true) {
//   1
// } else {
//   2
// }

// const validNumber = num1 > num2 ? console.log('true') : console.log('bye');


////////------ Function Declaration ------///////////

function nameFunction() {
  alert('Hello!');
  console.log('Hi!');
}

// nameFunction();

// const name = 'Petya';
// const surname = 'Petrenko';

// function sayHi(firstName = 'User', lastName = 'Surname', age = 34) {
//   alert(`Hi ${firstName || 'dfdfdf'} ${lastName || 'dfd'}. Your age is ${age}`)
//   console.log(`firstName`)
// }

// sayHi();


//////----- Function Expression ----////

const greeting = function(message, name = 'User') {
  alert(`${message} ${name}`);
}

// greeting();


///////////////////////////////

function sum(a = 2, b = 2) {
  if (true) {
    return a + b;
  }

  return "Hi";
}

console.log(sum(2))


///////---------- Arrow function -------//////
const greeting = (name = '') => {

}

console.log(greeting('Kira'));