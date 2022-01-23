import Grid from "./grid.js";
import State from "./design/state.js";
import Equation from "./design/equation.js";
import LineSeg from "./lineSeg/lineSeg.js";
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
let line = new LineSeg(state);
let line_bot = line.get_items().lineBot();
line.add_item(line_bot);
let item = line.get_items().normal("blaz blaz 2");
// let item = new Normal(state, "blabla");
line.add_item(item);
let pwr = line.get_items().power("X", "2");
// let pwr = new Power(state,"X","2");
line.add_item(pwr);
let line_bot_end = line.get_items().lineBotEnd();
// let line_bot_end = new LineBotEnd(state);
line.add_item(line_bot_end);
// equation.add_segment(pwr); ????? Gooodddddd
//==============================
equation.add_segment(line);
console.log("eengn", equation);
equation.draw();
