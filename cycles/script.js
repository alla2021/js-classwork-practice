
//////--------- SWITCH CASE -----------///////
// let b = 'b';

// const input = prompt('Enter number')

// switch (input) {
//   case '1':
//     alert('it is !');
//     break;
//   case '2':
//     alert('it is @');
//     break;
//   case '3':
//     alert('it is #');
//     break;
//   default:
//     alert('Wrong number');
// }
///////////////////////////

///////////// INCREMENT & DECREMENT //////////////
let a = 1;

console.log('a --->', a++)

let b = 2;

console.log('b --->', b--)

////////////---------- CYCLES -----------////////////


//// While /////

const quantity = prompt('Number?')
let i = 0;

while (i < 10) {

  if (i > 10) break;
  console.log(i);
  i++;
}

///// Do While /////

let i = 0;
let question = null;

do {
  // console.log(i);
  question = prompt('2 + 2 * 2 = ?');
  // if (question === 6) break;
  // i++;
} while (question !== 6)


///// For //////
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;

  console.log(i)
}