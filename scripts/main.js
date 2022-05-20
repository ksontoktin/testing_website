var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/my_photo.png') {
      myImage.setAttribute ('src','images/snejinka.jpeg');
    } else {
      myImage.setAttribute ('src','images/my_photo.png');
    }
}

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
