import Grid from "./grid.js";
import State from "./design/state.js";
import Equation from "./design/equation.js";
//===========================================
let canvas = document.getElementById("crown");
// @ts-expect-error
let ctx = canvas.getContext('2d');
// @ts-expect-error
let state = new State(canvas, ctx);
// @ts-expect-error
let g = new Grid(canvas);
g.draw();
//==================Grid Ends ================
// --@ts-expect-error
let equation = new Equation(state);
equation.segment_gap = 50;
// let line = new LineSeg(state);
let line = equation.add_seg().lineSeg();
let line_bot = line.add_item().lineBot();
// line.add_item(line_bot);
let item = line.add_item().normal("blaz blaz 2");
// let item = new Normal(state, "blabla");
// line.add_item(item);
let pwr = line.add_item().power("X", "2");
// let pwr = new Power(state,"X","2");
// line.add_item(pwr);
// line.add_item().
let line_bot_end = line.add_item().lineBotEnd();
// let line_bot_end = new LineBotEnd(state);
// line.add_item(line_bot_end);
// equation.add_segment(pwr); ????? Gooodddddd
//==============================
//..........................
let line02 = equation.add_seg().lineSeg();
let line02_item = line02.add_item().normal("a + b = c");
// line02.add_item(line02_item);
let line03 = equation.add_seg().lineSeg();
let line03_item = line02.add_item().normal("x + y = z");
// let frac = new Frac(state,line02,line03);
// let frac = equation
//..........................
// equation.add_segment(line);
// equation.add_segment(frac);
console.log("eengn", equation);
equation.draw();
