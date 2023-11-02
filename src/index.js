/*
    * Este es el inicio de mi demencia, hasta donde mis ganas de aprender
    * me permitiran ir, que horizontes me seran posible explorar
    */

var canvas = document.getElementById("main-canvas");
var context = canvas.getContext("2d");


context.fillStyle = "red";
// context.fillRect(10, 10, 1, 1);


function drawPixel(x, y) {
    context.fillRect(x, y, 1, 1);
};


for (let i=10; i <= 200; i++) {
    drawPixel(i, 10);
};


// function drawCircle() {
//     let pi = 3.1416;
//     let d = 50;
// 
//     let circunferencia = pi * d;
// };
