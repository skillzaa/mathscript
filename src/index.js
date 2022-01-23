import Grid from "./grid.js";
import eq from "./examples/first_decent.js";
let canvas = document.getElementById("crown");
//@ts-expect-error
let g = new Grid(canvas);
//==================Grid Ends ================
let equation = eq(100, 100);
console.log("eengn", equation);
g.draw();
equation.draw();
//???????????????????????????????
// setInterval(function(){
//     equation.state.incX(1);
//     equation.draw();
//     console.log("animation");
// },200);
