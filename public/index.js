



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
