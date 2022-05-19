var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/my_photo.png') {
      myImage.setAttribute ('src','images/snejinka.jpeg');
    } else {
      myImage.setAttribute ('src','images/my_photo.png');
    }
}


var canvas = document.getElementById("myCanvas"), 
    context = canvas.getContext("2d"),
    w = canvas.width,
    h=canvas.height;
     
var mouse = { x:0, y:0};
var draw = false;
 
canvas.addEventListener("mousedown", function(e){
     
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
    draw = true;
    context.beginPath();
    context.moveTo(mouse.x, mouse.y);
});
canvas.addEventListener("mousemove", function(e){
     
    if(draw==true){
     
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        context.lineTo(mouse.x, mouse.y);
        context.stroke();
    }
});
canvas.addEventListener("mouseup", function(e){
     
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
    context.lineTo(mouse.x, mouse.y);
    context.stroke();
    context.closePath();
    draw = false;
});


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
