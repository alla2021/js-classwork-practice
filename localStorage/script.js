const storage = window.localStorage;

const user = {
  name: 'John',
  age: 34
}

// console.log(`JSON.stringify(user)`, JSON.stringify(user))
const stringifyObj = JSON.stringify(user);

console.log(`stringifyObj`, stringifyObj)
console.log(`JSON.parse(stringifyObj)`, JSON.parse(stringifyObj))

storage.setItem('user', stringifyObj);


// storage.removeItem('name');
// storage.clear();

console.log(`storage`, storage);

/////////////////////////////////////////

function addNewItem(data = {}) {
  const products = storage.getItem('cart') ? storage.getItem('cart') : JSON.stringify([]);
  let cart = JSON.parse(products);
  const existingItem = cart.find(item => item.name === data.name);


  if (existingItem) {
    cart = cart.map(item => {
      return {
        count: item.count += data.count,
        ...item
      }
    })
  } else {
    cart.push(data);
  }


  storage.setItem('cart', JSON.stringify(cart))
}

addNewItem({ name: 'Orange', price: 10, count: 2, isFresh: true });
addNewItem({ name: 'Apple', price: 4, count: 1, isFresh: false });
addNewItem({ name: 'Cherry', price: 3, count: 1, isFresh: false });


function removeItem(name) {
  const cart = JSON.parse(storage.getItem('cart'));

  console.log(`cart`, cart)
  if (cart) {
    const newCart = cart.filter(item => item.name !== name);

    storage.setItem('cart', JSON.stringify(newCart));
    console.log(`JSON.stringify(newCart)`, JSON.stringify(newCart))
  }
}

removeItem('Apple');
removeItem('Cherry');


addNewItem({ name: 'Cherry', price: 3, count: 1, isFresh: false });
