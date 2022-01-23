import Grid from "../grid.js";
import State from "../design/state.js";
import Equation from "../design/equation.js";
//===========================================
let canvas = document.getElementById("crown");
// @ts-expect-error
let ctx = canvas.getContext('2d');
// @ts-expect-error
let state= new State(canvas,ctx);

// @ts-expect-error
let g = new Grid(canvas);
g.draw();
//==================Grid Ends ================
// --@ts-expect-error
let equation = new Equation(state);
equation.segment_gap = 50;
let line = equation.add_seg().lineSeg();

line.add_item().lineBot();
line.add_item().normal("blaz blaz 2");
line.add_item().power("X","2");
line.add_item().lineBotEnd();

//==============================
//..........................
// let line02 = equation.add_seg().lineSeg();

// let line02_item = line02.add_item().normal("a + b = c");

// let line03 = equation.add_seg().lineSeg();
// let line03_item = line02.add_item().normal("x + y = z");
// let frac = new Frac(state,line02,line03);
// let frac = equation
//..........................

console.log("eengn",equation);
equation.draw();
