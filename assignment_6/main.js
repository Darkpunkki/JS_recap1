'use strict';

function count() {
  let input = prompt('Please enter a positive number:');
  let number = parseInt(input, 10);

  let table = document.querySelector('table');

  while (table.rows.length > 0) {
    table.deleteRow(-1);
  }

  if (number <= 0) {
    alert('Please enter a positive number');
  } else if (isNaN(number)) {
    alert('Please enter a number');
  } else {
    for (let i = 1; i <= number; i++) {
      let row = table.insertRow();
      for (let j = 1; j <= number; j++) {
        let cell = row.insertCell();
        cell.innerText = i * j;
      }
    }
  }
}

document.getElementById('countBtn').addEventListener('click', count);
