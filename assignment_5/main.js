'use strict';

function count() {
  let number = prompt('Please enter a number:');
  let result = 0;
  for (let i = 0; i <= number; i++) {
    result += i;
  }

  document.getElementById('result').innerHTML = `Result: ${result}`;
}

document.getElementById('countBtn').addEventListener('click', count);
