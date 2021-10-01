const table = document.querySelector('table');
const tableBody = document.querySelector('tbody');
const columnsTitle = document.querySelectorAll('th');

const strToNum = (value) => isNaN(value) ? value : Number(value);

function sortColumn(event) {
  const rows = Array.from(tableBody.rows);
  const index = event.target.cellIndex;

  const sortedRows = rows.sort((a, b) => {
    const current = strToNum(a.cells[index].innerText);
    const next = strToNum(b.cells[index].innerText);


    if (current > next) {
      return 1;
    }

    if (current < next) {
      return -1;
    }

    return 0;
  })

  // console.log(`sortedRows`, sortedRows)

  // for (let row of sortedRows) {
  //   tableBody.append(row);
  // }

  tableBody.append(...sortedRows)

}

columnsTitle.forEach(item => item.addEventListener('click', sortColumn));
columnsTitle.forEach(item => item.removeEventListener('click', sortColumn));




// function move() {
//   window.addEventListener('mousemove', function name() {

//   })

// }


// function resize(event) {

// }


// resizer.addEventListener('mousedown', function name(event) {

// })


// window.addEventListener('mouseup', function (event) {
//   box.removeEventListener('mousemove', move);
// })

// console.log(`columnsTitle`, columnsTitle)