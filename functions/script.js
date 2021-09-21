
// "условие" ? "1" : "2"

// true ? 1 : 2

// if (true) {
//   1
// } else {
//   2
// }

// const validNumber = num1 > num2 ? console.log('true') : console.log('bye');


////////------ Function Declaration ------///////////

// function nameFunction() {
//   alert('Hello!');
//   console.log('Hi!');
// }

// nameFunction();

// const name = 'Petya';
// const surname = 'Petrenko';

// function sayHi(firstName = 'User', lastName = 'Surname', age = 34) {
//   alert(`Hi ${firstName || 'dfdfdf'} ${lastName || 'dfd'}. Your age is ${age}`)
//   console.log(`firstName`)
// }

// sayHi();

//////----- Function Expression ----////

// const greeting = function(message, name = 'User') {
//   alert(`${message} ${name}`);
// }

// greeting();


/////////////////-------------  -----------------//////////////
// function sum(a = 2, b = 2) {
//   if (true) {
//     return a + b;
//   }

//   return "Hi";
// }

// console.log(sum(2))


///////---------- Arrow function -------//////
// const greeting = (name = '') => {

// }

// console.log(greeting('Kira'));


function isPerfectNumber(num) {
  let result = 0
  let i = 0

  for (; i < num; i++) {
    if (num % i !== 0) continue;

    result += i
  }

  if (result === num) return true
}


function findPerfectNumber(min, max) {

  console.time('for')
  let i = min;

  for (; i < max; ) {
    i++

    if (!isPerfectNumber(i)) continue;
    console.log(i)

  }
  console.timeEnd("for");

  // console.time('while')
  // let i = min;

  // while (i < max) {
  //   i++
  //   if (isPerfectNumber(i)) {
  //     console.log(i)
  //   }
  // }
  // console.timeEnd("while");


}

// console.log(findPerfectNumber(2, 100000))

// function calcFactorial(num = 1) {
//   let result = 1;

//   for (let i = 1; i <= num; i++) {
//     result *= i;
//   }

//   return result;
// }

const calcFactorial = num => num !== 1 ? num * calcFactorial(num - 1) : num;

// console.log(calcFactorial(5));


////////------------ REST / SPREAD ----------------////////////

// function findMaxNumber(...numbers) {
//   // console.log('arguments --->', arguments)
//   return Math.max(...numbers)
// }



// const findMinNumber = (...numbers) => {
//   // console.log('arguments --->', arguments)
//   console.log(...numbers)
//   return Math.min(...numbers)
// }


// console.log('findMinNumber---->', findMinNumber(2, 1, 4, 6, 7, -1))


// console.log(findMaxNumber(1, 4, 5, 7, 8))


////////---------- Function Callback -------///////

// findNUmbe
// getName
// setDate
// handleClick
// calcSum
// moveX

function provideAccess() {
  alert('Yeaaaah!! Access granted!!!');
}

function deniedAccess(age) {

  alert(`Ooohh! Access denied! Sorry your age is ${age}`);
}


function handleAccess(age, reject, resolve) {
  if (age < 18) {
    reject(age)
  } else {
    resolve(age)
  }
}

// const age = +prompt('How is year old?');

// handleAccess(4, deniedAccess, provideAccess);


///////////////////------  Closure ------///////////
function greeting(age, name) {
  const phrase = `Hi ${name}`;

  function sayHi() {
    alert(phrase)
  }

  if (age > 18) {
    return sayHi()
  }
}

greeting(43, 'Piter')