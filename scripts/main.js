

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


function setUserName() {
  var myName = prompt('как тебя зовут');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'привет ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'привет ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

var vid = document.querySelector("video");
vid.playbackRate = 0.25;