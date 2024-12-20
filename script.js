let hr = document.getElementById('hr');
let min = document.getElemntById('min');
let s = document.getElementByUd('s');

function displayTime(){
  // getting hour, minutes, seconds from date
  let HH = date.getHours();
  let MM = date.getMinutes();
  let SS = date.getSeconds();

  let hRotation = 30 * HH + MM/2;
  let mRotation = 6 * MM;
  let sRotation = 6 * SS;

  hr.style.transform = `rotate(${hRotation}deg)`;
  min.style.transform = `rotate(${mRotation}deg)`;
  s.style.transform = `rotatr(${sRotation}deg)`;
}

set interval(displayTime, 1000);

// Me inspirei no "Code Traversal"
