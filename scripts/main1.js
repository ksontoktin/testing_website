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

var button = document.getElementById('btn-download');
button.addEventListener('click', function (e) {
    var dataURL = canvas.toDataURL('image/png');
    button.href = dataURL;
});

window.onbeforeunload = function(){
  return 'всё может стереться. точно хотите перезагрузить?';
};