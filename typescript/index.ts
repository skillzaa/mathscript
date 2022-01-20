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
segline.insert_normal("a+b=c");


eengn.add_segment(segline);
console.log("eengn",eengn);
eengn.draw(state,ctx);

// let segment = eengn.new_segment(segline);

// console.log("segline",segline);

// segment.insert_power({content : "a",power:"3"});
// segment.insert_normal({content:"+"});
// segment.insert_power({content : "b",power:"3"});
// segment.insert_normal({content:"="});
// segment.insert_power({content : "c",power:"3"});
// segment.insert_normal({content:"a+b=c"});

// eengn.draw();