'use strict';

function calculateDistance() {
  const x1 = document.getElementById('x1').value;
  const y1 = document.getElementById('y1').value;
  const x2 = document.getElementById('x2').value;
  const y2 = document.getElementById('y2').value;

  const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  document.getElementById('result').innerHTML = 'Distance: ' + distance;
}
