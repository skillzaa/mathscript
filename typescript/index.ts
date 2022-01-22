import Grid from "./grid.js";
import EqEngine from "./eqEngine/eqengine.js";
import SegLine from "./segLine/segLine.js";
import State from "./state.js";
let canvas = document.getElementById("crown");

// @ts-expect-error
let ctx = canvas.getContext('2d');
// @ts-expect-error
let state= new State(canvas,ctx);

// console.log(ctx);
// @ts-expect-error
let g = new Grid(canvas);
g.draw();

let eengn = new EqEngine(state);
eengn.segment_gap = 50;
let segline = new SegLine(state);

segline.segment_gap = 4;
// segline.special();
// segline.special(127801);
segline.lineBot();
segline.power("H","n");
// segline.power({content:"H" , power:"n" , moveup: 10});
segline.sqrt(); 
segline.normal("aef"); 
segline.power("KEW","w");
segline.sqrtend();
segline.lineBotEnd();
//==============================
eengn.add_segment(segline);
console.log("eengn",eengn);
eengn.draw();
