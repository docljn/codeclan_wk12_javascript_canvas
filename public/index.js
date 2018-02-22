



document.addEventListener("DOMContentLoaded", function () {
  let pensize = 50;
  const canvas = document.getElementById("main-canvas");
  const context = canvas.getContext("2d");  // '2d' means 2-D context

  const penBigger = function () {
    pensize += 5;
  };

  const buttonBigger = document.querySelector("#bigger");
  buttonBigger.addEventListener("click", penBigger);

  const penSmaller = function () {
    pensize -= 5;
    if (pensize < 1) pensize = 1;
  };

  const buttonSmaller = document.querySelector("#smaller");
  buttonSmaller.addEventListener("click", penSmaller);


  const changeColour = function () {
    context.fillStyle = this.value;
  };

  const colourPicker = document.querySelector("#input-color");
  colourPicker.addEventListener("change", changeColour);


  const Circle = function (xlocation, ylocation, radius) {
    this.xlocation = xlocation;
    this.ylocation = ylocation;
    this.radius = radius;
  };

  Circle.prototype.drawCircle = function () {
    context.beginPath();
    context.arc(this.xlocation, this.ylocation, pensize, 0, Math.PI*2, true);
    context.stroke();
    context.fill();
  };


  canvas.addEventListener("mousemove", function (event) {
    const circle = new Circle (event.layerX, event.layerY, pensize);
    circle.drawCircle();
  });









});



// taken from inside app:
// draw a rectangle: context.fillRect(x, y, width, height);
/*
context.fillStyle = "#881212"; // have to change the color before you draw it
context.fillRect(10, 10, 50, 50);
*/

// draw a line:
/*
context.beginPath();
context.moveTo(100, 100); // set start point
context.lineTo(100, 200); // draw the line path
context.stroke(); // make the path visible
*/

// draw a triangle:
/*
context.beginPath();
context.moveTo(200, 200);
context.lineTo(200, 300);
context.lineTo(100, 300);
context.closePath();
context.stroke();
*/

// draw a circle:
/*
context.beginPath();
context.arc(400, 400, 50, 0, Math.PI * 2, true);
context.stroke();
context.fillStyle = "blue";
context.fill();
*/
/*
const img = document.createElement("img");
img.src = "https://media.licdn.com/media/AAEAAQAAAAAAAAa_AAAAJDY3OGM1YmFiLWU0YjMtNGU5MC04ZGZjLTE4MmVlMGZkMjk4Ng.jpg";

const drawManny = function () {
context.drawImage(img, 200, 200, 180, 180);
};

img.addEventListener("load", drawManny);
*/


// const drawCircle = function (x, y) {
//   context.beginPath();
//   context.arc(x, y, 10, 0, Math.PI*2, true);
//   context.stroke();
//   context.fill();
// };
