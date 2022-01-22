import Grid from "./grid.js";
import State from "./design/state.js";
import Equation from "./design/equation.js";
import Segment from "./design/segment.js";
import Item from "./design/item.js";


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

let line = new Segment();
let item = new Item(state, "blabla");
line.add_item(item);;
//==============================
equation.add_segment(line);
console.log("eengn",equation);
equation.draw();
