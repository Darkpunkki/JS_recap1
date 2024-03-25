'use strict';

function checkGrade() {
  let score = prompt('Please enter your score:');

  if (score < 40) {
    document.getElementById('result').innerHTML = 'Grade: 0';
  } else if (score >= 40 && score < 52) {
    document.getElementById('result').innerHTML = 'Grade: 1';
  } else if (score >= 52 && score < 64) {
    document.getElementById('result').innerHTML = 'Grade: 2';
  } else if (score >= 64 && score < 76) {
    document.getElementById('result').innerHTML = 'Grade: 3';
  } else if (score >= 76 && score < 88) {
    document.getElementById('result').innerHTML = 'Grade: 4';
  } else if (score >= 88 && score <= 100) {
    document.getElementById('result').innerHTML = 'Grade: 5';
  }
}

document.getElementById('checkBtn').addEventListener('click', checkGrade);
