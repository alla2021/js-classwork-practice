// const user = {
//   name: 'Ivan',
//   age: 55,
//   role: 'user',
//   'is admin': true,
//   33: false,
//   country: {
//     city: {
//       district: 'Manhatten',
//     },
//     region: 'NA',
//     zip_code: 34343
//   }
// };

// console.log(user.name);
// console.log(user.age);
// console.log(user.role);
// console.log(user['is admin']);
// console.log(user[33]);
// console.log(user.country.city.district);

///////////////// for in ///////////


// function copyObj(obj) {
//   const newObj = {};

//   for (let key in obj) {
//     newObj[key] = obj[key]
//   }

//   return newObj
// }

// box.square = 36;

// const box = Object.assign({}, rectangle, tria);

const calcPerimeter = () => {
  if ('width' in this && 'height' in this) {
    return (this.width + this.height) * 2;
  }

  return 'Not found keys';
}

// function calcPerimeter() {
//   console.log(this)
//   return (this.width + this.height) * 2;
// }

// console.log(calcPerimeter())

const rectangle = {
  width: 100,
  height: 100,
  x: 0,
  y: 0,
  getParamethers() {
    return `height - ${this.height}, width - ${this.width}`;
  },
  setWidth(newWitdth) {
    this.width = newWitdth;
  },
  setHeight(newHeight) {
    this.height = newHeight;
  },
  moveX(newX) {
    this.x = newX;
  },
  moveY(newY) {
    this.y = newY;
  },
  calcSqure() {
    return `Squre is ${this.width * this.height}`
  },
  calcPerimeter,
}

const box = {
  width: 300,
  height: 300,
  calcPerimeter,
}

console.log('box calcPerimeter ---> ', box.calcPerimeter())
console.log('rectangle calcPerimeter ---> ', rectangle.calcPerimeter());

rectangle.getParamethers();
rectangle.setHeight(300);
rectangle.setWidth(400);
rectangle.moveX(100);
rectangle.moveY(150);
console.log(rectangle.calcSqure());


const figure = document.getElementById('item');

figure.style.height = `${rectangle.height}px`;
figure.style.width = `${rectangle.width}px`;
figure.style.left = `${rectangle.x}px`;
figure.style.top = `${rectangle.y}px`;


console.log('rectangle ----> ', 'diagonal' in rectangle)


for (let key in rectangle) {
  // rectangle['width']
  // rectangle.height
  // rectangle.x
  console.log('key ---> ',key)
}

console.log('Object.keys ---->', Object.keys(rectangle))
console.log('Object.values ---->', Object.values(rectangle))
console.log('Object.entries ---->', Object.entries(rectangle))



const triangle = { ...rectangle };
console.log('triangle', triangle);
