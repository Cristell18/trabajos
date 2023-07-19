function Numeral1() {
    var canvas = document.getElementById("myCanvas");
      var ctx = canvas.getContext("2d");
    // Dibujar la línea en el canvas
    //ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(400, 400);
    ctx.stroke();
var start = [0, 0];
var end = [400, 400];
var distance = Math.sqrt(Math.pow(end[0]-start[0],2)+Math.pow(end[1]-start[1],2));
var coordinates = document.getElementById("R1");
coordinates.textContent="Numeral1:"+distance;
}

function Numeral2() {
  var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
  // Dibujar la línea en el canvas
  //ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas
  ctx.beginPath();
  ctx.moveTo(400, 200);
  ctx.lineTo(0, 200);
  ctx.stroke();
var start = [400, 200];
var end = [0, 200];
var distance = Math.sqrt(Math.pow(end[0]-start[0],2)+Math.pow(end[1]-start[1],2));
var coordinates = document.getElementById("R2");
coordinates.textContent="Numeral2:"+distance;

}

function Numeral3() {
  var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
  // Dibujar la línea en el canvas
  //ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas
  ctx.beginPath();
  ctx.moveTo(200, 400);
  ctx.lineTo(200, 0);
  ctx.stroke();
var start = [200, 400];
var end = [200, 0];
var distance = Math.sqrt(Math.pow(end[0]-start[0],2)+Math.pow(end[1]-start[1],2));
var coordinates = document.getElementById("R3");
coordinates.textContent="Numeral3:"+distance;
}

function Numeral4() {
  var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
  // Dibujar la línea en el canvas
  //ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas
  ctx.beginPath();
  ctx.moveTo(0, 400);
  ctx.lineTo(400, 0);
  ctx.stroke();
var start = [0, 400];
var end = [400, 0];
var distance = Math.sqrt(Math.pow(end[0]-start[0],2)+Math.pow(end[1]-start[1],2));
var coordinates = document.getElementById("R4");
coordinates.textContent="Numeral4:"+distance;
}

function eliminar(){
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, 400, 400);
}