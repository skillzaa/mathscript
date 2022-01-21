import Grid from "./grid.js";
import EqEngine from "./eqEngine/eqengine.js";
// import Power from "./segLineItems/power.js";
import SegLine from "./segLine/segLine.js";
import State from "./state.js";
let canvas = document.getElementById("crown");
let ctx = canvas.getContext('2d');
let state= new State(canvas,ctx);

// console.log(ctx);
let g = new Grid(canvas);
g.draw();


let eengn = new EqEngine();
let segline = new SegLine();
segline.insert_normal(" {(a+b)} = c ");
segline.insert_normal(" x+y = z");
segline.insert_power({content:"H" , power:"n" , moveup: 10});

eengn.add_segment(segline);
console.log("eengn",eengn);
eengn.draw(state);
