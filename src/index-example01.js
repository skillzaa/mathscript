import Grid from "./grid.js";
import EqEngine from "./eqEngine/eqengine.js";
// import Power from "./segLineItems/power.js";
import SegLine from "./segLine/segLine.js";
import State from "./state.js";
let canvas = document.getElementById("crown");
// @ts-expect-error
let ctx = canvas.getContext('2d');
// @ts-expect-error
let state = new State(canvas, ctx);
// console.log(ctx);
// @ts-expect-error
let g = new Grid(canvas);
g.draw();
let eengn = new EqEngine();
eengn.segment_gap = 50;
let segline = new SegLine();
segline.insert_special();
segline.insert_special(127801);
segline.insert_normal(" {(a+b)} = c ");
segline.insert_normal(" x+y = z");
segline.insert_power({ content: "H", power: "n", moveup: 10 });
// segline.insert_power({content:"H" , power:"n" , moveup: 10});
segline.insert_sqrt("abcdef");
//==============================
eengn.add_segment(segline);
console.log("eengn", eengn);
eengn.draw(state, state.x);
