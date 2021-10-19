// console.log('1'[0] + 2);

// console.log([2] + 3);

// console.log([3] + 2);

const arr = [1, 2, 3, 4];

arr.num = 5;

// console.log(arr.num);

////////////////////////////

const a = {
  name: 'audi',
  year: '2021'
}

const b = {
  name: 'audi',
  year: 2021
}

function isEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

console.log(isEqual(a, b));

//////////////---------////////////
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 4, 5, 6, 7, 1];

function removeDuplicates(a, b) {
  const newArr = [...a, ...b]; ///1. создать общий массив
  const uniqArr = [];          ///2. создать новый масссив
  console.log(newArr)

  newArr.filter(function(item) {
    if (!uniqArr.includes(item)) {   /// 3. проверить есть ли элемент в массиве
      uniqArr.push(item)   //// 4. добавить найденынй эл в новый массив
    }
  })

  return uniqArr; /// 5. вернуть новый массив
}

console.log(removeDuplicates(arr1, arr2))


/////////////////////////////////
const parent = document.querySelector('#parent');
const child = document.querySelector('#child');

function showMessage(event) {
  event.stopPropagation();
  const text = this.querySelector('p');

  alert(text.innerText)
}

parent.addEventListener('click', showMessage)
child.addEventListener('click', showMessage)

///////////////////////////////////////