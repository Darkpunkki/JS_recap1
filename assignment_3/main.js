'use strict';

function checkType() {
  let value1 = prompt('Please enter the first value:');
  let value2 = prompt('Please enter the second value:');
  let value3 = prompt('Please enter the third value:');

  if (value1 && value2 == value3) {
    document.getElementById(
      'result'
    ).innerHTML = `The triangle is an equilateral triangle.`;
  } else if (value1 == value2 || value1 == value3 || value2 == value3) {
    document.getElementById(
      'result'
    ).innerHTML = `The triangle is an isosceles triangle.`;
  } else if (value1 !== value2 && value1 !== value3 && value2 !== value3) {
    document.getElementById(
      'result'
    ).innerHTML = `The triangle is a scalene triangle.`;
  }
}

document.getElementById('convertBtn').addEventListener('click', checkType);
