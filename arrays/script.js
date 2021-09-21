// const arr = [1, 2, 4, 5, 7];
// console.log('arr----->',  arr)

// console.log(Array.isArray(arr))
// console.log('length --> ', arr.length)
// console.log(arr[arr.length - 1])

// arr[8] = 3;

// console.log('arr----->', arr)


/////////------ METHODS -----------/////////
///// POP -- delete from end
const numbers = [1, {}, '3', [], false, 7, 8, true];

console.log('pop ---> ', numbers.pop());

//// PUSH  --- add to the end

numbers.push('new_item');


//// SHIFT ---- delete from start
numbers.shift()

//// UNSHIFT ---- add to the start
numbers.unshift('first')

// console.log('numbers----->', numbers)
const matrix = [[1, 2, 3], [2, 3, 4], [5, 7, 8]];

console.log(matrix[1][2])

///// SPLICE
numbers.splice(2, 2)

console.log('numbers----->', numbers)
/// SLICE
numbers.slice(0, 3);

const copyArray = [...numbers];
// const copyArray = numbers.slice();

//// CONCAT

numbers.concat(copyArray)
console.log('concat --->', [...numbers, ...copyArray])
console.log(numbers.concat(copyArray))

console.log('copyArray ---->', copyArray)

////// REVERSE

console.log('reverse --->', numbers.reverse())

///// JOIN
console.log('JOIN ---> ', numbers.join('__'))

///// FOR EACH ///////
function showElements(item, index, array) {
  console.log(`${item} with index ${index}`)
}
const arr = [1, 2, 4, 5, 6]

arr.forEach((item, index) => {
  if (item % 2 === 0) {
    console.log(item)
  }
});

///// FOR /////
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i])
// }


// for (let element of arr) {
//   if (element % 2 === 0) {
//     console.log(element)
//   }
// }

/////  INDEXOF & INCLUDES

console.log('indexOf--->', arr.indexOf(2))

console.log('INCLUDES ---> ', arr.includes(90))


//// FIND //////
const findNumber = arr.find(function (element) {
  return element > 2
})

// const findNumber = arr.find(element => element > 2)

console.log('findNumber--->', findNumber)

///// FILTER ////
const filteredArray = arr.filter(function (element) {
  return element > 2
})

console.log('filteredArray--->', filteredArray)

////// MAP /////
const stingNumbers = arr.map(function (item) {
  return item.toString()
})


// const names = ['ivan', 'kolya', 'piterr', 'mike']

console.log(`stingNumbers`, stingNumbers)

// const toUpperCase = names.map(item => item.toUpperCase())

// console.log(`toUpperCase`, toUpperCase)

///// SORT ///////
const number = [3, 5, 4, 7, 8, 11, 1, 10]

// console.log(`number sorted`, number.sort());

number.sort(function (a, b) {
  if (a > b) {
    return 1
  }

  if (a < b) {
    return -1
  }

  return 0
})

// console.log(`number`, number);

///// REDUCE //////

const factorial = [1, 2, 3, 4, 5];

const result = factorial.reduce(function (prev, current, index, array) {
  return prev + current
})

console.log(result);

const odd = factorial.some(item => item % 3 === 0);

console.log(`odd`, odd);

const typeNumbers = factorial.every(item => typeof item === 'number')
console.log(`typeNumbers`, typeNumbers);

////////
const digits = [1, 2, 3, 4, 5];
const copy = [...arr];
console.log(arr)

function addElementByIndex(arr, index, element) {
  const newArray = arr.slice();

  newArray.splice(index, 0, element);

  return newArray;
}


function removeElementByIndex(arr, index) {
  ///
}

removeElementByIndex(digits, 3);



// const names = ['piter', 'mike', 'john', 'sarah'];

const users = [
  { name: 'piter', age: 55, admin: true },
  { name: 'mike', age: 44, admin: false },
  { name: 'john', age: 22, admin: true },
  { name: 'sarah', age: 42, admin: false },
]

const list = [
  { name: 'apple', count: 22, bought: true },
  { name: 'orage', count: 2,  bought: false }
]


function sortByBuy(arr) {
  const newArray = [...arr];

  newArray.sort()
}


function addNewItem(arr, item) {
  // const newArray = [...arr];


  const item = arr.find(el => el.name === item.name);


  if () {

  } else {
    arr.push(item)
  }
}


function markAsBuy(name) {
  const item = arr.find(el => el.name === item.name);

  item.bought = true;
}

checkBuy('apple')

addNewItem(list, {name: 'apple', count: 3})

// const users = [
//   { name: 'PITER', age: 55, admin: true },
//   { name: 'MIKE', age: 44, admin: false },
//   { name: 'john', age: 22, admin: true },
//   { name: 'sarah', age: 42, admin: false },
// ]

function toUpperCaseName(arr) {
  const copyArray = [...arr];

  return copyArray.map(function (item) {
    return { age: item.age.toString(), admin: item.admin, name: item.name.toUpperCase() }
  })
}


function calcAverageAge(arr) {
  const sum = arr.reduce(function (prev, item) {
    return prev + item.age
  }, 0)

  return sum / arr.length;
}

console.log(`calcSumOfAge`, calcAverageAge(users));


// console.log('toUpperCaseName', toUpperCaseName(users))