import Grid from "./grid.js";
import EqEngine from "./eqEngine/eqengine.js";
import SegLine from "./segLine/segLine.js";
import State from "./state-old.js";
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
let eengn = new EqEngine(state);
eengn.segment_gap = 50;
let segline = new SegLine(state);
segline.segment_gap = 4;
// segline.special();
// segline.special(127801);
segline.sqrt();
segline.power("H", "n");
segline.sqrtend();
segline.normal("+");
// segline.power({content:"H" , power:"n" , moveup: 10});
segline.power("KEW", "w");
segline.normal("+");
segline.sqrt();
segline.normal("a");
segline.power("e", "3");
segline.normal("f");
segline.sqrtend();
//==============================
eengn.add_segment(segline);
console.log("eengn", eengn);
eengn.draw();
